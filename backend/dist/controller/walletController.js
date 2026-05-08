import {} from 'express';
import {} from '../middleware/verifyToken.js';
import { getWalletByUserId, createWallet, updateWalletBalance, createTransaction, getTransactionsByWalletId, } from '../db/queries.js';
export const getWallet = async (req, res) => {
    try {
        const userId = req.userId;
        let wallet = await getWalletByUserId(userId);
        // auto create wallet with a starting balance of 50
        if (!wallet) {
            wallet = await createWallet(userId, 50);
        }
        res.status(200).json({
            success: true,
            data: {
                ...wallet,
                isBalanceLow: wallet.balance < wallet.lowBalanceThreshold,
            },
        });
    }
    catch (error) {
        console.error('Error getting wallet:', error);
        res.status(500).json({ success: false, message: 'Failed to get wallet.' });
    }
};
export const rechargeWallet = async (req, res) => {
    try {
        const userId = req.userId;
        const { amount } = req.body;
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            res.status(400).json({ success: false, message: 'Invalid recharge amount.' });
            return;
        }
        if (amount > 500) {
            res.status(400).json({ success: false, message: 'Maximum single top-up is 500 AED.' });
            return;
        }
        let wallet = await getWalletByUserId(userId);
        if (!wallet)
            wallet = await createWallet(userId, 50);
        // cap: total balance cannot exceed 500 AED
        if (wallet.balance + amount > 500) {
            const canTopUp = 500 - wallet.balance;
            res.status(400).json({
                success: false,
                message: `Your balance would exceed the 500 AED maximum. You can top up a maximum of ${canTopUp.toFixed(2)} AED.`,
            });
            return;
        }
        const newBalance = Math.round((wallet.balance + amount) * 100) / 100;
        const totalRecharges = wallet.totalRecharges + amount;
        const [updatedWallet] = await Promise.all([
            updateWalletBalance(wallet.id, newBalance, totalRecharges),
            createTransaction({
                walletId: wallet.id,
                type: 'recharge',
                amount,
                description: 'Wallet recharge',
                status: 'completed',
                balanceAfter: newBalance,
            }),
        ]);
        res.status(200).json({
            success: true,
            data: {
                ...updatedWallet,
                isBalanceLow: updatedWallet.balance < updatedWallet.lowBalanceThreshold,
            },
        });
    }
    catch (error) {
        console.error('Error recharging wallet:', error);
        res.status(500).json({ success: false, message: 'Failed to recharge wallet.' });
    }
};
export const getTransactions = async (req, res) => {
    try {
        const userId = req.userId;
        const limit = parseInt(req.query['limit']) || 10;
        const skip = parseInt(req.query['skip']) || 0;
        const wallet = await getWalletByUserId(userId);
        if (!wallet) {
            res.status(404).json({ success: false, message: 'Wallet not found.' });
            return;
        }
        const transactions = await getTransactionsByWalletId(wallet.id, limit, skip);
        res.status(200).json({ success: true, data: transactions });
    }
    catch (error) {
        console.error('Error getting transactions:', error);
        res.status(500).json({ success: false, message: 'Failed to get transactions.' });
    }
};
//# sourceMappingURL=walletController.js.map