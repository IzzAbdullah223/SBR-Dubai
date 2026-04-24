import {} from 'express';
import * as routeFinder from '../services/routeFinder.js';
import * as busGenerator from '../services/busGenerator.js';
import * as topsis from '../services/topsis.js';
import { calculateDistance } from '../services/geoCalculator.js';
import { FindBusesSchema } from '../lib/types.js';
import {} from '../lib/types.js';
const MODE_WEIGHTS = {
    fastest: { time: 0.55, cost: 0.20, walkingDistance: 0.15, transfers: 0.10 },
    cheapest: { time: 0.15, cost: 0.55, walkingDistance: 0.20, transfers: 0.10 },
    less_walking: { time: 0.15, cost: 0.15, walkingDistance: 0.55, transfers: 0.15 },
    fewest_transfers: { time: 0.15, cost: 0.15, walkingDistance: 0.15, transfers: 0.55 },
};
export const findBuses = async (req, res) => {
    try {
        const parsed = FindBusesSchema.safeParse(req.body);
        if (!parsed.success) {
            const firstError = parsed.error.issues[0];
            const field = firstError?.path[0];
            const errorCode = field === 'origin' ? 'INVALID_ORIGIN' :
                field === 'destination' ? 'INVALID_DESTINATION' :
                    'MISSING_FIELDS';
            res.status(400).json({
                success: false,
                errorCode,
                message: firstError?.message ?? 'Invalid request body.',
            });
            return;
        }
        const { origin, destination, optimizationMode } = parsed.data;
        const distKm = calculateDistance(origin.lat, origin.lng, destination.lat, destination.lng);
        if (distKm < 0.05) {
            res.status(400).json({
                success: false,
                errorCode: 'SAME_LOCATION',
                message: 'Origin and destination are too close to each other.',
            });
            return;
        }
        const weights = MODE_WEIGHTS[optimizationMode ?? 'fastest'] ?? MODE_WEIGHTS['fastest'];
        console.log('Finding buses from:', origin, 'to:', destination);
        const routeData = await routeFinder.findAllRoutes(origin, destination);
        if (routeData.originStops.length === 0 && routeData.destStops.length === 0) {
            res.status(404).json({
                success: false,
                errorCode: 'NO_STOPS_BOTH',
                message: 'No bus stops found near your origin or destination. Try selecting a location closer to a main road.',
            });
            return;
        }
        if (routeData.originStops.length === 0) {
            res.status(404).json({
                success: false,
                errorCode: 'NO_ORIGIN_STOPS',
                message: 'No bus stops found near your origin. Try a nearby main road or landmark.',
            });
            return;
        }
        if (routeData.destStops.length === 0) {
            res.status(404).json({
                success: false,
                errorCode: 'NO_DEST_STOPS',
                message: 'No bus stops found near your destination. Try a nearby main road or landmark.',
            });
            return;
        }
        if (!routeData.success) {
            res.status(404).json({
                success: false,
                errorCode: 'NO_STOPS',
                message: routeData.message ?? 'No bus stops found near your locations.',
            });
            return;
        }
        console.log(`  Found ${routeData.originStops.length} origin stops`);
        console.log(`  Found ${routeData.destStops.length} destination stops`);
        console.log(`  Found ${routeData.directRoutes.length} direct routes`);
        console.log(`  Found ${routeData.transferRoutes.length} transfer routes`);
        if (routeData.directRoutes.length === 0 && routeData.transferRoutes.length === 0) {
            res.status(404).json({
                success: false,
                errorCode: 'NO_ROUTES',
                message: 'Bus stops were found near both locations, but no routes connect them. ' +
                    'Try locations along major roads like Sheikh Zayed Road or Al Wasl Road.',
                debug: {
                    originStops: routeData.originStops.length,
                    destStops: routeData.destStops.length,
                },
            });
            return;
        }
        const allBuses = await busGenerator.generateAllBuses(routeData, origin);
        console.log(`  Generated ${allBuses.length} total buses`);
        if (allBuses.length === 0) {
            res.status(404).json({
                success: false,
                errorCode: 'OUT_OF_SERVICE',
                message: 'Routes were found but no buses are currently running. ' +
                    'Dubai RTA buses typically operate from 5:00 AM to 11:30 PM on weekdays.',
                debug: {
                    directRoutes: routeData.directRoutes.length,
                    transferRoutes: routeData.transferRoutes.length,
                },
            });
            return;
        }
        const busGroups = {};
        for (const bus of allBuses) {
            if (!busGroups[bus.routeNumber])
                busGroups[bus.routeNumber] = [];
            busGroups[bus.routeNumber].push(bus);
        }
        const representatives = Object.values(busGroups)
            .flatMap(group => {
            const sorted = [...group].sort((a, b) => a.arrivalTime - b.arrivalTime);
            const rep = sorted[0];
            if (!rep)
                return [];
            rep.upcomingDepartures = sorted.map(b => ({
                departureTime: b.departureTime,
                departureTime24: b.departureTime24,
                minutesFromNow: b.arrivalTime,
            }));
            return [rep];
        })
            .filter((b) => b !== undefined);
        let rankedBuses;
        try {
            rankedBuses = topsis.rankBuses(representatives, weights);
        }
        catch (topsisError) {
            console.error('  TOPSIS ranking failed:', topsisError);
            rankedBuses = representatives.map(b => ({ ...b, score: 0 }));
        }
        console.log(`Ranked ${rankedBuses.length} routes using TOPSIS`);
        res.status(200).json({
            success: true,
            count: rankedBuses.length,
            buses: rankedBuses,
            stats: {
                directRoutes: routeData.directRoutes.length,
                transferRoutes: routeData.transferRoutes.length,
                totalBuses: rankedBuses.length,
            },
        });
    }
    catch (error) {
        console.error('Error in findBuses:', error);
        res.status(500).json({
            success: false,
            errorCode: 'SERVER_ERROR',
            message: 'Something went wrong on our end. Please try again in a moment.',
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
//# sourceMappingURL=TopsisController.js.map