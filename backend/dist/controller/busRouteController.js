import {} from 'express';
import * as db from '../db/queries.js';
export const getAllRoutes = async (req, res) => {
    try {
        const routes = await db.getAllRoutes();
        res.status(200).json({
            success: true,
            count: routes.length,
            data: routes,
        });
    }
    catch (error) {
        console.error('Error fetching routes:', error);
        res.status(500).json({
            success: false,
            error: 'Server error while fetching routes',
        });
    }
};
export const getRouteByNumber = async (req, res) => {
    try {
        const routeNumber = req.params['routeNumber'];
        if (!routeNumber) {
            res.status(400).json({ success: false, error: 'Route number is required' });
            return;
        }
        const route = await db.getRouteByNumber(routeNumber);
        if (!route) {
            res.status(404).json({
                success: false,
                error: 'Route not found',
            });
            return;
        }
        const stopIds = route.stops.map(s => s.stopId);
        const stopDetails = await db.getStopsByStopIds(stopIds);
        const stopDetailsMap = new Map(stopDetails.map(s => [s.stopId, s]));
        const routeWithStopDetails = {
            ...route,
            stopDetails: route.stops.map(routeStop => ({
                ...routeStop,
                ...stopDetailsMap.get(routeStop.stopId),
            })),
        };
        res.status(200).json({
            success: true,
            data: routeWithStopDetails,
        });
    }
    catch (error) {
        console.error('Error fetching route:', error);
        res.status(500).json({
            success: false,
            error: 'Server error while fetching route',
        });
    }
};
//# sourceMappingURL=busRouteController.js.map