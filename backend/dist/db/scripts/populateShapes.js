import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { parse as csv } from 'csv-parse/sync';
import { prisma } from '../lib/prisma.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });
const GTFS_PATH = path.resolve(__dirname, '..', '..', '..', 'data');
const importShapes = async () => {
    console.log('SHAPES IMPORTER');
    console.log('═'.repeat(50) + '\n');
    try {
        const shapesPath = path.join(GTFS_PATH, 'shapes.txt');
        if (!fs.existsSync(shapesPath)) {
            console.error('shapes.txt not found at:', shapesPath);
            process.exit(1);
        }
        const fileContent = fs.readFileSync(shapesPath, 'utf8');
        const records = csv(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
            quote: '"',
            relax_quotes: true,
        });
        console.log(`Read ${records.length} rows from shapes.txt`);
        //  group points by the shape id 
        const shapesMap = new Map();
        for (const row of records) {
            const shapeId = row['shape_id']?.replace(/"/g, '').trim();
            const lat = parseFloat(row['shape_pt_lat']);
            const lng = parseFloat(row['shape_pt_lon']);
            const sequence = parseInt(row['shape_pt_sequence']);
            const distTraveled = parseFloat(row['shape_dist_traveled'] ?? '0') || 0;
            if (!shapeId || isNaN(lat) || isNaN(lng) || isNaN(sequence))
                continue;
            if (!shapesMap.has(shapeId))
                shapesMap.set(shapeId, { points: [], maxDist: 0 });
            const entry = shapesMap.get(shapeId);
            entry.points.push({ lat, lng, sequence, distTraveled });
            if (distTraveled > entry.maxDist)
                entry.maxDist = distTraveled;
        }
        console.log(`Found ${shapesMap.size} unique shapes\n`);
        // import in batches
        const BATCH_SIZE = 50;
        let imported = 0;
        const entries = [...shapesMap.entries()];
        for (let i = 0; i < entries.length; i += BATCH_SIZE) {
            const batch = entries.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map(([lineId, data]) => {
                data.points.sort((a, b) => a.sequence - b.sequence);
                const coordinates = data.points.map(p => ({ lat: p.lat, lng: p.lng }));
                return prisma.line.upsert({
                    where: { lineId },
                    update: {
                        coordinates,
                        pointCount: coordinates.length,
                        totalDistance: Math.round(data.maxDist),
                    },
                    create: {
                        lineId,
                        coordinates,
                        pointCount: coordinates.length,
                        totalDistance: Math.round(data.maxDist),
                    },
                });
            }));
            imported += batch.length;
            console.log(`${imported}/${entries.length} shapes imported...`);
        }
        const total = await prisma.line.count();
        console.log(`Done! ${total} shapes in DB\n`);
    }
    catch (error) {
        console.error('Import failed:', error);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
        console.log('Disconnected\n');
    }
};
importShapes();
//# sourceMappingURL=populateShapes.js.map