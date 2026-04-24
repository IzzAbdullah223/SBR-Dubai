import { getRoutesByStopIds, getStopsByStopIds } from '../db/queries.js';
import { findNearbyStops } from './geoCalculator.js';
import {} from '../lib/types.js';
export const findDirectRoutes = async (originStops, destStops) => {
    const nearbyStopIds = [
        ...originStops.map(s => s.stopId),
        ...destStops.map(s => s.stopId),
    ];
    const allRoutes = await getRoutesByStopIds(nearbyStopIds);
    const connectingRoutes = [];
    const seen = new Set();
    allRoutes.forEach(route => {
        if (seen.has(route.routeNumber))
            return;
        const routeStopIds = route.stops.map(s => s.stopId);
        const matchingOriginStops = originStops.filter(s => routeStopIds.includes(s.stopId));
        const matchingDestStops = destStops.filter(s => routeStopIds.includes(s.stopId));
        if (!matchingOriginStops.length || !matchingDestStops.length)
            return;
        const originStop = matchingOriginStops.sort((a, b) => a.distance - b.distance)[0];
        const destStop = matchingDestStops.sort((a, b) => a.distance - b.distance)[0];
        connectingRoutes.push({ route, originStop, destStop, type: 'direct' });
        seen.add(route.routeNumber);
    });
    return connectingRoutes;
};
export const findRoutesWithTransfer = async (originStops, destStops) => {
    const originStopIds = originStops.map(s => s.stopId);
    const destStopIds = destStops.map(s => s.stopId);
    const [routesFromOrigin, routesToDest] = await Promise.all([
        getRoutesByStopIds(originStopIds),
        getRoutesByStopIds(destStopIds),
    ]);
    const transferRoutes = [];
    const seen = new Set();
    const allCommonStopIds = new Set();
    routesFromOrigin.forEach(route1 => {
        routesToDest.forEach(route2 => {
            if (route1.routeNumber === route2.routeNumber)
                return;
            const route1StopIds = route1.stops.map(s => s.stopId);
            const route2StopIds = route2.stops.map(s => s.stopId);
            route1StopIds
                .filter(id => route2StopIds.includes(id))
                .forEach(id => allCommonStopIds.add(id));
        });
    });
    const commonStopDetails = await getStopsByStopIds([...allCommonStopIds]);
    const stopPositionMap = new Map(commonStopDetails.map(s => [s.stopId, { lat: s.lat, lng: s.lng }]));
    const sq = (a, b) => (a.lat - b.lat) ** 2 + (a.lng - b.lng) ** 2;
    routesFromOrigin.forEach(route1 => {
        routesToDest.forEach(route2 => {
            if (route1.routeNumber === route2.routeNumber)
                return;
            const pairKey = `${route1.routeNumber}→${route2.routeNumber}`;
            if (seen.has(pairKey))
                return;
            const route1StopIds = route1.stops.map(s => s.stopId);
            const route2StopIds = route2.stops.map(s => s.stopId);
            const commonStopIds = route1StopIds.filter(id => route2StopIds.includes(id));
            if (!commonStopIds.length)
                return;
            const matchingOriginStops = originStops.filter(s => route1StopIds.includes(s.stopId));
            const matchingDestStops = destStops.filter(s => route2StopIds.includes(s.stopId));
            if (!matchingOriginStops.length || !matchingDestStops.length)
                return;
            const originStop = matchingOriginStops.sort((a, b) => a.distance - b.distance)[0];
            const destStop = matchingDestStops.sort((a, b) => a.distance - b.distance)[0];
            const originPos = { lat: originStop.lat, lng: originStop.lng };
            const destPos = { lat: destStop.lat, lng: destStop.lng };
            let bestTransferStopId = commonStopIds[0];
            let bestScore = Infinity;
            commonStopIds.forEach(stopId => {
                const pos = stopPositionMap.get(stopId);
                if (!pos)
                    return;
                const score = sq(originPos, pos) + sq(pos, destPos);
                if (score < bestScore) {
                    bestScore = score;
                    bestTransferStopId = stopId;
                }
            });
            transferRoutes.push({
                route1,
                route2,
                originStop,
                transferStopId: bestTransferStopId,
                destStop,
                type: 'transfer'
            });
            seen.add(pairKey);
        });
    });
    return transferRoutes;
};
export const findAllRoutes = async (origin, destination) => {
    const [originStops, destStops] = await Promise.all([
        findNearbyStops(origin.lat, origin.lng, 1.0),
        findNearbyStops(destination.lat, destination.lng, 1.0),
    ]);
    if (!originStops.length || !destStops.length) {
        return {
            success: false,
            message: 'No bus stops found near your locations.',
            originStops,
            destStops,
            directRoutes: [],
            transferRoutes: [],
        };
    }
    const directRoutes = await findDirectRoutes(originStops, destStops);
    const transferRoutes = directRoutes.length === 0
        ? await findRoutesWithTransfer(originStops, destStops)
        : [];
    return {
        success: true,
        originStops,
        destStops,
        directRoutes,
        transferRoutes,
    };
};
//# sourceMappingURL=routeFinder.js.map