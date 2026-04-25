import { Router } from 'express';
import { getSavedRoutes, createSavedRoute, deleteSavedRoute } from '../controller/savedRouteController.js';
import { verifyToken } from '../middleware/Verifytoken.js';

export const savedRouteRouter = Router();

savedRouteRouter.get('/saved-routes',     verifyToken, getSavedRoutes);
savedRouteRouter.post('/saved-routes',    verifyToken, createSavedRoute);
savedRouteRouter.delete('/saved-routes/:id', verifyToken, deleteSavedRoute);