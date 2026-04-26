import { type Response } from 'express';
import { type AuthRequest } from '../middleware/verifyToken.js';
export declare const getWallet: (req: AuthRequest, res: Response) => Promise<void>;
export declare const rechargeWallet: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getTransactions: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=walletController.d.ts.map