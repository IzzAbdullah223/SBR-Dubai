import { type Response } from 'express';
import { type AuthRequest } from '../middleware/verifyToken.js';
export declare const getSavedRoutes: (req: AuthRequest, res: Response) => Promise<void>;
export declare const createSavedRoute: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteSavedRoute: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=savedRouteController.d.ts.map