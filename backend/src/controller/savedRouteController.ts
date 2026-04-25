import { type Response } from 'express';
import { type AuthRequest } from '../middleware/Verifytoken.js';
import * as db from '../db/queries.js';

export const getSavedRoutes = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const routes = await db.getSavedRoutesByUserId(userId);
    res.status(200).json({
      success: true,
      count:   routes.length,
      data:    routes,
    });
  } catch (error) {
    console.error('getSavedRoutes error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch saved routes.' });
  }
};

export const createSavedRoute = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const { routeName, originName, originLat, originLng, destName, destLat, destLng } = req.body;

    if (!routeName || !originName || !originLat || !originLng || !destName || !destLat || !destLng) {
      res.status(400).json({
        success: false,
        message: 'routeName, originName, originLat, originLng, destName, destLat and destLng are required.',
      });
      return;
    }

    const newRoute = await db.createSavedRoute({
      userId,
      routeName,
      originName,
      originLat,
      originLng,
      destName,
      destLat,
      destLng,
    });

    res.status(201).json({
      success: true,
      data:    newRoute,
      message: 'Journey saved successfully.',
    });
  } catch (error: any) {
    if (error?.code === 'P2002') {
      res.status(409).json({
        success: false,
        message: 'This journey is already in your saved routes.',
      });
      return;
    }
    console.error('createSavedRoute error:', error);
    res.status(500).json({ success: false, message: 'Failed to save route.' });
  }
};

export const deleteSavedRoute = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const id = parseInt(req.params['id'] as string);

    if (isNaN(id)) {
      res.status(400).json({ success: false, message: 'Invalid route ID.' });
      return;
    }

    const route = await db.getSavedRouteById(id);
    if (!route) {
      res.status(404).json({ success: false, message: 'Saved route not found.' });
      return;
    }

    if (route.userId !== userId) {
      res.status(403).json({ success: false, message: 'Not authorised to delete this route.' });
      return;
    }

    await db.deleteSavedRoute(id);
    res.status(200).json({ success: true, message: 'Route deleted successfully.' });
  } catch (error) {
    console.error('deleteSavedRoute error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete route.' });
  }
};