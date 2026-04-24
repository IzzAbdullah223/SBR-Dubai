import { Router } from 'express';
import { getSavedRoutes, createSavedRoute, deleteSavedRoute } from '../controller/savedRouteController.js';

export const savedRouteRouter = Router();

// auth here later
savedRouteRouter.get('/saved-routes', getSavedRoutes);
savedRouteRouter.post('/saved-routes', createSavedRoute);
savedRouteRouter.delete('/saved-routes/:id', deleteSavedRoute);