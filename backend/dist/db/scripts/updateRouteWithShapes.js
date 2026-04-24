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
const updateRoutesWithShapes = async () => {
    console.log('UPDATE ROUTES WITH SHAPE IDS');
    console.log('═'.repeat(50) + '\n');
    try {
        const dataDir = GTFS_PATH;
        // get route_id from routenumber from routes.txt
        const routesContent = fs.readFileSync(path.join(dataDir, 'routes.txt'), 'utf8');
        const routesRecords = csv(routesContent, {
            columns: true, skip_empty_lines: true, trim: true, quote: '"', relax_quotes: true,
        });
        const routeIdToShortName = new Map();
        for (const row of routesRecords) {
            const routeId = row['route_id']?.replace(/"/g, '').trim();
            const shortName = row['route_short_name']?.replace(/"/g, '').trim();
            if (routeId && shortName)
                routeIdToShortName.set(routeId, shortName);
        }
        console.log(`📄 Loaded ${routeIdToShortName.size} routes from routes.txt`);
        //  from routenumber get the lineId 
        const tripsContent = fs.readFileSync(path.join(dataDir, 'trips.txt'), 'utf8');
        const tripsRecords = csv(tripsContent, {
            columns: true, skip_empty_lines: true, trim: true, quote: '"', relax_quotes: true,
        });
        const routeShapes = new Map();
        for (const row of tripsRecords) {
            const routeId = row['route_id']?.replace(/"/g, '').trim();
            const shapeId = row['shape_id']?.replace(/"/g, '').trim();
            const direction = row['direction_id']?.replace(/"/g, '').trim();
            if (!routeId || !shapeId || direction === undefined)
                continue;
            const shortName = routeIdToShortName.get(routeId);
            if (!shortName)
                continue;
            if (!routeShapes.has(shortName))
                routeShapes.set(shortName, {});
            const existing = routeShapes.get(shortName);
            // only store first shape found per direction
            if (!existing[direction])
                existing[direction] = shapeId;
        }
        console.log(`Built shape map for ${routeShapes.size} routes\n`);
        // update each route in the DB
        const allRoutes = await prisma.busRoute.findMany({ select: { routeNumber: true } });
        console.log(`Found ${allRoutes.length} routes in DB\n`);
        let updated = 0;
        let noShape = 0;
        let noReturn = 0;
        for (const route of allRoutes) {
            const shapes = routeShapes.get(route.routeNumber);
            if (!shapes) {
                console.log(`No shape found for route: ${route.routeNumber}`);
                noShape++;
                continue;
            }
            const forwardLineId = shapes['0'] ?? null;
            const returnLineId = shapes['1'] ?? null;
            if (!returnLineId)
                noReturn++;
            await prisma.busRoute.update({
                where: { routeNumber: route.routeNumber },
                data: { lineId: forwardLineId, lineIdReturn: returnLineId },
            });
            console.log(` Route ${route.routeNumber.padEnd(6)} → forward: ${(forwardLineId ?? 'none').padEnd(12)} return: ${returnLineId ?? 'none'}`);
            updated++;
        }
        console.log(`Summary:`);
        console.log(`Updated:          ${updated} routes`);
        console.log(`No shape at all: ${noShape} routes`);
        console.log(`No return shape: ${noReturn} routes`);
        console.log(`Done!\n`);
    }
    catch (error) {
        console.error('Update failed:', error);
    }
    finally {
        await prisma.$disconnect();
        console.log('Disconnected\n');
    }
};
updateRoutesWithShapes();
//# sourceMappingURL=updateRouteWithShapes.js.map