import { type Request, type Response } from 'express';
import type { Weights } from '../lib/types.js';
export declare const MODE_WEIGHTS: Record<string, Weights>;
export declare const findBuses: (req: Request, res: Response) => Promise<void>;
export declare const rankBuses: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=TopsisController.d.ts.map