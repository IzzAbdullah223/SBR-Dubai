import {} from 'express';
import * as db from '../db/queries.js';
export const getSavedRoutes = async (req, res) => {
    // auth here later
    try {
        const userId = req.user?.id;
        const routes = await db.getSavedRoutesByUserId(userId);
        res.status(200).json({
            success: true,
            count: routes.length,
            data: routes,
        });
    }
    catch (error) {
        console.error('getSavedRoutes error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch saved routes.',
        });
    }
};
// userId comes from JWT token (req.user.id), never from the request body
export const createSavedRoute = async (req, res) => {
    // auth here later
    try {
        const userId = req.user?.id;
        const { routeName, origin, destination } = req.body;
        //  validate
        if (!routeName || !origin || !destination) {
            res.status(400).json({
                success: false,
                message: 'routeName, origin, and destination are required.',
            });
            return;
        }
        if (!origin.name || !origin.lat || !origin.lng) {
            res.status(400).json({
                success: false,
                message: 'origin must include name, lat, and lng.',
            });
            return;
        }
        if (!destination.name || !destination.lat || !destination.lng) {
            res.status(400).json({
                success: false,
                message: 'destination must include name, lat, and lng.',
            });
            return;
        }
        const newRoute = await db.createSavedRoute({
            userId,
            routeName,
            originName: origin.name,
            originLat: origin.lat,
            originLng: origin.lng,
            destName: destination.name,
            destLat: destination.lat,
            destLng: destination.lng,
        });
        res.status(201).json({
            success: true,
            data: newRoute,
            message: 'Journey saved successfully.',
        });
    }
    catch (error) {
        if (error?.code === 'P2002') {
            res.status(409).json({
                success: false,
                message: 'This journey is already in your saved routes.',
            });
            return;
        }
        console.error('createSavedRoute error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save route.',
        });
    }
};
// only the owner can delete their own saved routes
export const deleteSavedRoute = async (req, res) => {
    // auth here later
    try {
        const userId = req.user?.id;
        const id = parseInt(req.params['id']);
        if (isNaN(id)) {
            res.status(400).json({ success: false, message: 'Invalid route ID.' });
            return;
        }
        const route = await db.getSavedRouteById(id);
        if (!route) {
            res.status(404).json({ success: false, message: 'Saved route not found.' });
            return;
        }
        // ownership check — users can only delete their own saved routes
        if (route.userId !== userId) {
            res.status(403).json({ success: false, message: 'Not authorised to delete this route.' });
            return;
        }
        await db.deleteSavedRoute(id);
        res.status(200).json({
            success: true,
            message: 'Route deleted successfully.',
        });
    }
    catch (error) {
        console.error('deleteSavedRoute error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete route.',
        });
    }
};
//# sourceMappingURL=savedRouteController.js.map