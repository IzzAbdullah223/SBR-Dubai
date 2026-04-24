import { Router } from 'express';
import { getAllStops, getStopById, findNearbyStops } from '../controller/busStopController.js';

export const busStopRouter = Router();

busStopRouter.get('/bus-stops/nearby', findNearbyStops);
busStopRouter.get('/bus-stops', getAllStops);
busStopRouter.get('/bus-stops/:stopId', getStopById);