import { type Request, type Response } from 'express';
import * as db from '../db/queries.js';
import { calculateDistance } from '../services/geoCalculator.js';


export const getAllStops = async (req: Request, res: Response): Promise<void> => {
  try {
    const stops = await db.getAllStops();

    res.status(200).json({
      success: true,
      count:   stops.length,
      data:    stops,
    });
  } catch (error) {
    console.error('Error fetching stops:', error);
    res.status(500).json({
      success: false,
      error:   'Server error while fetching stops',
    });
  }
};

export const getStopById = async (req: Request, res: Response): Promise<void> => {
  try {
    const stopId = req.params['stopId'] as string;

    if (!stopId) {
      res.status(400).json({ success: false, error: 'Stop ID is required' });
      return;
    }

    const stop = await db.getStopById(stopId);
    if (!stop) {
      res.status(404).json({ success: false, error: 'Stop not found' });
      return;
    }


    const routes = await db.getRoutesByStopIds([stopId]);
    const stopWithRoutes = {
      ...stop,
      routes: routes.map(route => ({
        routeNumber:    route.routeNumber,
        name:           route.name,
        type:           route.type,
        color:          route.color,
        stopSequence:   route.stops.find(s => s.stopId === stopId)?.stopSequence,
      })),
    };

    res.status(200).json({
      success: true,
      data:    stopWithRoutes,
    });
  } catch (error) {
    console.error('Error fetching stop:', error);
    res.status(500).json({
      success: false,
      error:   'Server error while fetching stop',
    });
  }
};


export const findNearbyStops = async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lng, radius = '1' } = req.query;

    if (!lat || !lng) {
      res.status(400).json({ success: false, error: 'Latitude and longitude are required' });
      return;
    }

    const latitude     = parseFloat(lat as string);
    const longitude    = parseFloat(lng as string);
    const searchRadius = parseFloat(radius as string);

    if (isNaN(latitude) || isNaN(longitude)) {
      res.status(400).json({ success: false, error: 'Invalid latitude or longitude' });
      return;
    }


    const nearbyStops = await db.findNearbyStops(latitude, longitude, searchRadius);

    const stopsWithDistance = nearbyStops.map(stop => ({
      ...stop,
      distance: parseFloat(
        calculateDistance(latitude, longitude, stop.lat, stop.lng).toFixed(2)
      ),
    }));

    res.status(200).json({
      success:      true,
      count:        stopsWithDistance.length,
      searchRadius,
      data:         stopsWithDistance,
    });
  } catch (error) {
    console.error('Error finding nearby stops:', error);
    res.status(500).json({
      success: false,
      error:   'Server error while finding nearby stops',
    });
  }
};