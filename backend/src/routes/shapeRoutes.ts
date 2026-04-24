import { Router } from 'express';
import { getShapeById, getShapeByRouteNumber } from '../controller/shapeController.js';

export const shapeRouter = Router();

shapeRouter.get('/shapes/route/:routeNumber', getShapeByRouteNumber);
shapeRouter.get('/shapes/:lineId', getShapeById);