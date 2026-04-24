import { Router } from 'express';
import { getWallet, rechargeWallet, getTransactions } from '../controller/walletController.js';
export const walletRouter = Router();
// auth here later
walletRouter.get('/wallet', getWallet);
walletRouter.post('/wallet/recharge', rechargeWallet);
walletRouter.get('/wallet/transactions', getTransactions);
//# sourceMappingURL=walletRoutes.js.map