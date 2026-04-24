import { Router } from 'express';
import { getAllRoutes, getRouteByNumber } from '../controller/busRouteController.js';
export const busRouteRouter = Router();
busRouteRouter.get('/routes', getAllRoutes);
busRouteRouter.get('/routes/:routeNumber', getRouteByNumber);
//# sourceMappingURL=busRouteRoutes.js.map