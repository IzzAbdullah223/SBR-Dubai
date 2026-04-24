import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import readline from 'readline';
import { prisma } from '../lib/prisma.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });

const GTFS_PATH = path.resolve(__dirname, '..', '..', '..', 'data');
console.log('GTFS Path:', GTFS_PATH);

//  csv parser
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current  = '';
  let inQuotes = false;

  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// reading GTFS files
async function readGTFSFile(filename: string): Promise<Record<string, string>[]> {
  const filePath = path.join(GTFS_PATH, filename);

  if (!fs.existsSync(filePath)) {
    const filesInDir = fs.readdirSync(GTFS_PATH);
    console.error(`File not found: ${filePath}`);
    console.error(`   Files in data dir: ${filesInDir.join(', ')}`);
    throw new Error(`File not found: ${filePath}`);
  }

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const records: Record<string, string>[] = [];
  let headers: string[] = [];
  let isFirstLine = true;

  for await (const line of rl) {
    if (!line.trim()) continue;
    if (isFirstLine) {
      headers     = parseCSVLine(line).map(h => h.replace(/^\uFEFF/, ''));
      isFirstLine = false;
    } else {
      const values = parseCSVLine(line);
      const record: Record<string, string> = {};
      headers.forEach((h, i) => { record[h] = values[i] ?? ''; });
      records.push(record);
    }
  }

  return records;
}

//  helpers
function determineStopType(name: string): 'stop' | 'station' | 'terminal' {
  const n = name.toLowerCase();
  if (n.includes('station') || n.includes('metro')) return 'station';
  if (n.includes('terminal') || n.includes('bus stn')) return 'terminal';
  return 'stop';
}

function determineRouteType(routeNumber: string): string {
  if (routeNumber.startsWith('X')) return 'express';
  if (routeNumber.startsWith('E')) return 'intercity';
  if (routeNumber.startsWith('C') || routeNumber.startsWith('F')) return 'local';
  return 'local';
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R    = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a    =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

//  clear existing data 
async function clearExistingData() {
  console.log('Clearing existing data...');
  await prisma.routeStop.deleteMany();
  const [stops, routes] = await Promise.all([
    prisma.busStop.deleteMany(),
    prisma.busRoute.deleteMany(),
  ]);
  console.log(`Deleted ${stops.count} bus stops`);
  console.log(`Deleted ${routes.count} bus routes\n`);
}

//  load bus stops 
async function loadStops() {
  console.log('Loading stops...');
  const data = await readGTFSFile('stops.txt');

  const busStops = data.filter(s => {
    const lt = s['location_type'] ?? '0';
    return lt === '0' || lt === '';
  });

  console.log(`   Found ${busStops.length} bus stops (filtered from ${data.length})`);

  const stops = busStops.map(s => ({
    stopId:    s['stop_id']!,
    name:      s['stop_name']!,
    lat:       parseFloat(s['stop_lat']!),
    lng:       parseFloat(s['stop_lon']!),
    type:      determineStopType(s['stop_name']!),
    zone:      s['zone_id'] || null,
    status:    'active' as const,
    routes:    [] as string[],
    amenities: [] as string[],
  }));

  console.log(`Processed ${stops.length} stops\n`);
  return stops;
}

//  loading routes
async function loadRoutes() {
  console.log('Loading routes...');
  const data = await readGTFSFile('routes.txt');

  const busRoutes = data.filter(r => r['route_type'] === '3');
  console.log(`   Found ${busRoutes.length} bus routes (filtered from ${data.length})`);

  const routes = busRoutes.map(r => ({
    routeId:     r['route_id']!,
    routeNumber: r['route_short_name']!,
    name:        r['route_long_name'] || `Route ${r['route_short_name']}`,
    color:       r['route_color'] ? `#${r['route_color']}` : '#6F2E90',
    textColor:   r['route_text_color'] ? `#${r['route_text_color']}` : '#FFFFFF',
    type:        determineRouteType(r['route_short_name']!),
  }));

  console.log(`Processed ${routes.length} routes\n`);
  return routes;
}

//  loading trips
async function loadTrips() {
  console.log('Loading trips...');
  const data = await readGTFSFile('trips.txt');

  const routeTripsMap = new Map<string, { tripId: string; serviceId: string; directionId: string }[]>();

  data.forEach(trip => {
    const routeId = trip['route_id']!;
    if (!routeTripsMap.has(routeId)) routeTripsMap.set(routeId, []);
    routeTripsMap.get(routeId)!.push({
      tripId:      trip['trip_id']!,
      serviceId:   trip['service_id']!,
      directionId: trip['direction_id']!,
    });
  });

  console.log(`Loaded ${data.length} trips for ${routeTripsMap.size} routes\n`);
  return routeTripsMap;
}

//  loading calendar
async function loadCalendar() {
  console.log('Loading calendar...');
  const data = await readGTFSFile('calendar.txt');

  const serviceMap = new Map<string, { hasWeekday: boolean; hasWeekend: boolean }>();

  data.forEach(s => {
    const isWeekday = ['sunday','monday','tuesday','wednesday','thursday'].some(d => s[d] === '1');
    const isWeekend = s['friday'] === '1' || s['saturday'] === '1';
    serviceMap.set(s['service_id']!, { hasWeekday: isWeekday, hasWeekend: isWeekend });
  });

  console.log(`Loaded ${serviceMap.size} service schedules\n`);
  return serviceMap;
}

//  process stop_times
async function processStopTimes(
  routes:        { routeId: string }[],
  routeTripsMap: Map<string, { tripId: string; directionId: string }[]>
) {
  console.log('Processing stop_times (1.4M lines — streaming)...\n');

  //  
  const neededTripIds = new Set<string>();
  routes.forEach(route => {
    const trips = routeTripsMap.get(route.routeId) ?? [];
    const first = trips.find(t => t.directionId === '0') ?? trips[0];
    if (first) neededTripIds.add(first.tripId);
  });

  const filePath = path.join(GTFS_PATH, 'stop_times.txt');
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  const tripStopsMap = new Map<string, { stopId: string; sequence: number }[]>();
  let headers: string[] = [];
  let isFirstLine       = true;
  let lineCount         = 0;

  for await (const line of rl) {
    if (!line.trim()) continue;

    if (isFirstLine) {
      headers     = parseCSVLine(line).map(h => h.replace(/^\uFEFF/, ''));
      isFirstLine = false;
      continue;
    }

    const values = parseCSVLine(line);
    const record: Record<string, string> = {};
    headers.forEach((h, i) => { record[h] = values[i] ?? ''; });

    const tripId = record['trip_id']!;
    if (!neededTripIds.has(tripId)) continue;

    if (!tripStopsMap.has(tripId)) tripStopsMap.set(tripId, []);
    tripStopsMap.get(tripId)!.push({
      stopId:   record['stop_id']!,
      sequence: parseInt(record['stop_sequence']!),
    });

    lineCount++;
    if (lineCount % 50000 === 0) {
      console.log(`Processed ${lineCount.toLocaleString()} relevant stop_times...`);
    }
  }

  console.log(`Done — ${lineCount.toLocaleString()} relevant stop_times loaded\n`);
  console.log('Building route sequences...');

  const routeStopsMap = new Map<string, { stopId: string; stopSequence: number }[]>();

  routes.forEach(route => {
    const trips = routeTripsMap.get(route.routeId) ?? [];
    const first = trips.find(t => t.directionId === '0') ?? trips[0];
    if (!first) return;

    const tripStops = (tripStopsMap.get(first.tripId) ?? [])
      .sort((a, b) => a.sequence - b.sequence);

    if (tripStops.length === 0) return;

    routeStopsMap.set(
      route.routeId,
      tripStops.map((s, idx) => ({ stopId: s.stopId, stopSequence: idx + 1 }))
    );
  });

  console.log(`Built sequences for ${routeStopsMap.size} routes\n`);
  return routeStopsMap;
}

// import bus stops
async function importBusStops(stops: {
  stopId: string; name: string; lat: number; lng: number;
  type: 'stop' | 'station' | 'terminal'; zone: string | null;
  status: 'active'; routes: string[]; amenities: string[];
}[]) {
  console.log('Importing bus stops...');
  const BATCH = 500;
  let imported = 0;

  for (let i = 0; i < stops.length; i += BATCH) {
    await prisma.busStop.createMany({
      data:           stops.slice(i, i + BATCH),
      skipDuplicates: true,
    });
    imported += Math.min(BATCH, stops.length - i);
    console.log(`${imported}/${stops.length} stops...`);
  }

  console.log(`Bus stops done\n`);
}

//  imprt routes
async function importBusRoutes(
  routes: { routeId: string; routeNumber: string; name: string; color: string; textColor: string; type: string }[],
  routeStopsMap: Map<string, { stopId: string; stopSequence: number }[]>,
  stopCoordsMap: Map<string, { lat: number; lng: number }>,
) {
  console.log('Importing routes...');
  let imported = 0;
  let skipped  = 0;

  for (const route of routes) {
    const stops = routeStopsMap.get(route.routeId);

    if (!stops || stops.length < 2) {
      skipped++;
      continue;
    }

    //  calculate the total distance
    let distance = 0;
    for (let i = 0; i < stops.length - 1; i++) {
      const a = stopCoordsMap.get(stops[i]!.stopId);
      const b = stopCoordsMap.get(stops[i + 1]!.stopId);
      if (a && b) distance += calculateDistance(a.lat, a.lng, b.lat, b.lng);
    }

    const baseFare = route.type === 'express' ? 5 : route.type === 'intercity' ? 7 : 3;

    const schedule = {
      weekday: { firstBus: '05:00', lastBus: '23:30', frequency: route.type === 'express' ? 10 : 15 },
      weekend: { firstBus: '06:00', lastBus: '23:00', frequency: route.type === 'express' ? 15 : 20 },
    };

    const fare = {
      baseFare,
      nolFare:  baseFare,
      cashFare: baseFare + 1,
      maxFare:  baseFare + 4.5,
    };

    await prisma.busRoute.create({
      data: {
        routeNumber: route.routeNumber,
        name:        route.name,
        color:       route.color,
        textColor:   route.textColor,
        type:        route.type,
        distance:    Math.round(distance * 10) / 10,
        numStops:    stops.length,
        schedule,
        fare,
        stops: {
          create: stops.map(s => ({
            stopId:       s.stopId,
            stopSequence: s.stopSequence,
          })),
        },
      },
    });

    imported++;
    if (imported % 20 === 0) console.log(`${imported} routes...`);
  }

  console.log(`Imported ${imported} routes, skipped ${skipped}\n`);
}

// update stops with route number
async function updateStopsWithRoutes(
  routes: { routeId: string; routeNumber: string }[],
  routeStopsMap: Map<string, { stopId: string }[]>,
) {
  console.log('Updating stops with route assignments...');

  const stopRoutesMap = new Map<string, string[]>();

  for (const route of routes) {
    const stops = routeStopsMap.get(route.routeId) ?? [];
    for (const stop of stops) {
      if (!stopRoutesMap.has(stop.stopId)) stopRoutesMap.set(stop.stopId, []);
      stopRoutesMap.get(stop.stopId)!.push(route.routeNumber);
    }
  }

  let updated = 0;
  for (const [stopId, routeNumbers] of stopRoutesMap) {
    await prisma.busStop.updateMany({
      where: { stopId },
      data:  { routes: { set: routeNumbers } },
    });
    updated++;
  }

  console.log(`Updated ${updated} stops with route info\n`);
}

//  verifify the bus stops and routes
async function verify() {
  const [totalStops, totalRoutes] = await Promise.all([
    prisma.busStop.count(),
    prisma.busRoute.count(),
  ]);
  console.log('Verification:');
  console.log(`Bus stops:  ${totalStops}`);
  console.log(` Bus routes: ${totalRoutes}\n`);
}

// main 
async function main() {
  console.log('DUBAI RTA GTFS SEEDER');
  console.log('═'.repeat(50) + '\n');

  try {
    await clearExistingData();

    const stops         = await loadStops();
    const routes        = await loadRoutes();
    const routeTripsMap = await loadTrips();
    await loadCalendar();

    const routeStopsMap = await processStopTimes(routes, routeTripsMap);

    const stopCoordsMap = new Map(stops.map(s => [s.stopId, { lat: s.lat, lng: s.lng }]));

    await importBusStops(stops);
    await importBusRoutes(routes, routeStopsMap, stopCoordsMap);
    await updateStopsWithRoutes(routes, routeStopsMap);
    await verify();

    console.log('SEEDING COMPLETE!\n');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('Disconnected\n');
  }
}

main();