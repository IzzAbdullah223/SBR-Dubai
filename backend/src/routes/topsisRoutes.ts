import { Router } from 'express';
import { findBuses,rankBuses } from '../controller/TopsisController.js';

export const topsisRouter = Router();

topsisRouter.post('/find-buses', findBuses);
topsisRouter.post('/find-buses/rank', rankBuses)