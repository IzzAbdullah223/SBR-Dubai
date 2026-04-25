import { type Response } from 'express';
import { type AuthRequest } from '../middleware/Verifytoken.js';
import * as db from '../db/queries.js';

export const getWallet = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    let wallet = await db.getWalletByUserId(userId);
    if (!wallet) {
      wallet = await db.createWallet(userId);
    }

    const recentTransactions = await db.getTransactionsByWalletId(wallet.id, 5, 0);

    res.status(200).json({
      success: true,
      data: {
        balance:           wallet.balance,
        cardNumber:        wallet.cardNumber,
        status:            wallet.status,
        isBalanceLow:      wallet.balance <= wallet.lowBalanceThreshold,
        lowThreshold:      wallet.lowBalanceThreshold,
        stats: {
          totalRecharges:  wallet.totalRecharges,
          totalSpent:      wallet.totalSpent,
          tripCount:       wallet.tripCount,
          lastRecharge:    wallet.lastRecharge,
          lastTransaction: wallet.lastTransaction,
        },
        recentTransactions,
      },
    });
  } catch (error) {
    console.error('getWallet error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch wallet' });
  }
};

export const rechargeWallet = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const parsed = parseFloat(req.body.amount);

    if (!parsed || parsed <= 0) {
      res.status(400).json({ success: false, message: 'Amount must be a positive number' });
      return;
    }
    if (parsed > 500) {
      res.status(400).json({ success: false, message: 'Maximum recharge is 500 AED' });
      return;
    }

    let wallet = await db.getWalletByUserId(userId);
    if (!wallet) {
      wallet = await db.createWallet(userId);
    }

    const newBalance = wallet.balance + parsed;

    const [updatedWallet] = await Promise.all([
      db.updateWalletBalance(wallet.id, newBalance, parsed),
      db.createTransaction({
        walletId:     wallet.id,
        type:         'recharge',
        amount:       parsed,
        description:  `Top-up of ${parsed} AED`,
        status:       'completed',
        balanceAfter: newBalance,
      }),
    ]);

    res.status(200).json({
      success: true,
      data: {
        balance:      updatedWallet.balance,
        cardNumber:   updatedWallet.cardNumber,
        isBalanceLow: updatedWallet.balance <= updatedWallet.lowBalanceThreshold,
      },
    });
  } catch (error) {
    console.error('rechargeWallet error:', error);
    res.status(500).json({ success: false, message: 'Failed to recharge wallet' });
  }
};

export const getTransactions = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.userId!;
    const limit  = parseInt(req.query['limit'] as string) || 10;
    const skip   = parseInt(req.query['skip']  as string) || 0;

    const wallet = await db.getWalletByUserId(userId);
    if (!wallet) {
      res.status(200).json({ success: true, data: [] });
      return;
    }

    const transactions = await db.getTransactionsByWalletId(wallet.id, limit, skip);
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    console.error('getTransactions error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch transactions' });
  }
};