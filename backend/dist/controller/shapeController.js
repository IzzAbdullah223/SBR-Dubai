import {} from 'express';
import * as db from '../db/queries.js';
const findClosestIndex = (coordinates, lat, lng) => {
    const cosLat = Math.cos((lat * Math.PI) / 180);
    let minDist = Infinity;
    let minIdx = 0;
    for (let i = 0; i < coordinates.length; i++) {
        const dLat = (coordinates[i]?.lat ?? 0) - lat;
        const dLng = ((coordinates[i]?.lng ?? 0) - lng) * cosLat;
        const d = dLat * dLat + dLng * dLng;
        if (d < minDist) {
            minDist = d;
            minIdx = i;
        }
    }
    return minIdx;
};
export const getShapeById = async (req, res) => {
    try {
        const lineId = req.params['lineId'];
        const { originStopId, destStopId } = req.query;
        if (!lineId) {
            res.status(400).json({ success: false, message: 'lineId is required' });
            return;
        }
        const shape = await db.getLineById(lineId);
        if (!shape) {
            res.status(404).json({ success: false, message: `Shape ${lineId} not found` });
            return;
        }
        const coordinates = shape.coordinates;
        const fullLength = coordinates.length;
        let trimmedCoords = coordinates;
        let trimmed = false;
        let trimRatio = 1.0;
        let wasReversed = false;
        if (originStopId && destStopId) {
            const [originStop, destStop] = await Promise.all([
                db.getStopById(originStopId),
                db.getStopById(destStopId),
            ]);
            if (originStop && destStop) {
                const originIdx = findClosestIndex(coordinates, originStop.lat, originStop.lng);
                const destIdx = findClosestIndex(coordinates, destStop.lat, destStop.lng);
                if (originIdx === destIdx) {
                    console.warn(`Shape ${lineId}: origin+dest snap to same index ${originIdx} — returning full shape`);
                }
                else if (originIdx < destIdx) {
                    trimmedCoords = coordinates.slice(originIdx, destIdx + 1);
                    trimmed = true;
                    wasReversed = false;
                }
                else {
                    trimmedCoords = coordinates.slice(destIdx, originIdx + 1).reverse();
                    trimmed = true;
                    wasReversed = true;
                }
                trimRatio = trimmedCoords.length / fullLength;
                console.log(`Shape ${lineId}: ${fullLength} → ${trimmedCoords.length} pts ` +
                    `(ratio=${trimRatio.toFixed(2)}, reversed=${wasReversed}, ` +
                    `stops ${originStopId}[${originIdx}] → ${destStopId}[${destIdx}])`);
            }
        }
        res.status(200).json({
            success: true,
            lineId: shape.lineId,
            pointCount: trimmedCoords.length,
            totalDistance: shape.totalDistance,
            trimmed,
            trimRatio,
            wasReversed,
            coordinates: trimmedCoords,
        });
    }
    catch (error) {
        console.error('Error fetching shape:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching shape' });
    }
};
export const getShapeByRouteNumber = async (req, res) => {
    try {
        const routeNumber = req.params['routeNumber'];
        if (!routeNumber) {
            res.status(400).json({ success: false, message: 'Route number is required' });
            return;
        }
        const route = await db.getRouteByNumber(routeNumber);
        if (!route) {
            res.status(404).json({ success: false, message: `Route ${routeNumber} not found` });
            return;
        }
        if (!route.lineId) {
            res.status(404).json({ success: false, message: `No shape for route ${routeNumber}` });
            return;
        }
        const shape = await db.getLineById(route.lineId);
        if (!shape) {
            res.status(404).json({ success: false, message: `Shape data not found for route ${routeNumber}` });
            return;
        }
        res.status(200).json({
            success: true,
            routeNumber: route.routeNumber,
            routeName: route.name,
            color: route.color,
            lineId: route.lineId,
            pointCount: shape.pointCount,
            coordinates: shape.coordinates,
        });
    }
    catch (error) {
        console.error('Error fetching shape by route:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
//# sourceMappingURL=shapeController.js.map