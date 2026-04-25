import { Router } from 'express';
import { getWallet, rechargeWallet, getTransactions } from '../controller/walletController.js';
import { verifyToken } from '../middleware/Verifytoken.js';

export const walletRouter = Router();

walletRouter.get('/wallet', verifyToken, getWallet);
walletRouter.post('/wallet/recharge', verifyToken, rechargeWallet);
walletRouter.get('/wallet/transactions', verifyToken, getTransactions);