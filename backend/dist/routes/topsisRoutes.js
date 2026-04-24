import { Router } from 'express';
import { findBuses } from '../controller/TopsisController.js';
export const topsisRouter = Router();
topsisRouter.post('/find-buses', findBuses);
//# sourceMappingURL=topsisRoutes.js.map