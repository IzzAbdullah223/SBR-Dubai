import {} from 'express';
import {} from '../middleware/verifyToken.js';
import * as db from '../db/queries.js';
import bcrypt from 'bcryptjs';
export const getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await db.getUserById(userId);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.status(200).json({ success: true, user: db.getPublicProfile(user) });
    }
    catch (error) {
        console.error('getProfile error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch profile' });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const { name, email, phone } = req.body;
        if (email) {
            const existing = await db.getUserByEmail(email);
            if (existing && existing.id !== userId) {
                res.status(400).json({ success: false, message: 'Email already in use' });
                return;
            }
        }
        const user = await db.updateUser(userId, {
            ...(name !== undefined && { name }),
            ...(email !== undefined && { email }),
            ...(phone !== undefined && { phone }),
        });
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.status(200).json({ success: true, user: db.getPublicProfile(user) });
    }
    catch (error) {
        console.error('updateProfile error:', error);
        res.status(500).json({ success: false, message: 'Failed to update profile' });
    }
};
export const changePassword = async (req, res) => {
    try {
        const userId = req.userId;
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            res.status(400).json({ success: false, message: 'Both current and new password are required' });
            return;
        }
        if (newPassword.length < 6) {
            res.status(400).json({ success: false, message: 'New password must be at least 6 characters' });
            return;
        }
        const user = await db.getUserWithPassword(userId);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password ?? '');
        if (!isMatch) {
            res.status(400).json({ success: false, message: 'Current password is incorrect' });
            return;
        }
        const hashed = await bcrypt.hash(newPassword, 10);
        await db.updateUser(userId, { password: hashed });
        res.status(200).json({ success: true, message: 'Password changed successfully' });
    }
    catch (error) {
        console.error('changePassword error:', error);
        res.status(500).json({ success: false, message: 'Failed to change password' });
    }
};
export const updatePreferences = async (req, res) => {
    try {
        const userId = req.userId;
        const { optimizationMode } = req.body;
        if (!optimizationMode) {
            res.status(400).json({ success: false, message: 'No optimization mode provided' });
            return;
        }
        const validModes = ['fastest', 'cheapest', 'less_walking', 'fewest_transfers'];
        if (!validModes.includes(optimizationMode)) {
            res.status(400).json({ success: false, message: 'Invalid optimization mode' });
            return;
        }
        const user = await db.updateUser(userId, { optimization: optimizationMode });
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.status(200).json({ success: true, user: db.getPublicProfile(user) });
    }
    catch (error) {
        console.error('updatePreferences error:', error);
        res.status(500).json({ success: false, message: 'Failed to update preferences' });
    }
};
export const updateLanguage = async (req, res) => {
    try {
        const userId = req.userId;
        const { language } = req.body;
        if (!['en', 'ar'].includes(language)) {
            res.status(400).json({ success: false, message: 'Invalid language' });
            return;
        }
        const user = await db.updateUser(userId, { language });
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        res.status(200).json({ success: true, user: db.getPublicProfile(user) });
    }
    catch (error) {
        console.error('updateLanguage error:', error);
        res.status(500).json({ success: false, message: 'Failed to update language' });
    }
};
export const getFavoriteStops = async (req, res) => {
    try {
        const userId = req.userId;
        const stops = await db.getFavoriteStopsByUserId(userId);
        res.status(200).json({ success: true, data: stops });
    }
    catch (error) {
        console.error('getFavoriteStops error:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch favorite stops' });
    }
};
export const addFavoriteStop = async (req, res) => {
    try {
        const userId = req.userId;
        const { stopId, name, lat, lng } = req.body;
        if (!stopId || !name || !lat || !lng) {
            res.status(400).json({ success: false, message: 'stopId, name, lat and lng are required' });
            return;
        }
        const existing = await db.getFavoriteStopsByUserId(userId);
        const already = existing.some(s => s.stopId === stopId);
        if (already) {
            res.status(409).json({ success: false, message: 'Stop already in favorites' });
            return;
        }
        await db.addFavoriteStop({ userId, stopId, name, lat, lng });
        const stops = await db.getFavoriteStopsByUserId(userId);
        res.status(200).json({ success: true, data: stops });
    }
    catch (error) {
        console.error('addFavoriteStop error:', error);
        res.status(500).json({ success: false, message: 'Failed to add favorite stop' });
    }
};
export const removeFavoriteStop = async (req, res) => {
    try {
        const userId = req.userId;
        const stopId = req.params['stopId'];
        await db.removeFavoriteStop(userId, stopId);
        const stops = await db.getFavoriteStopsByUserId(userId);
        res.status(200).json({ success: true, data: stops });
    }
    catch (error) {
        console.error('removeFavoriteStop error:', error);
        res.status(500).json({ success: false, message: 'Failed to remove favorite stop' });
    }
};
export const clearSavedRoutes = async (req, res) => {
    try {
        const userId = req.userId;
        const deleted = await db.clearSavedRoutesByUserId(userId);
        res.status(200).json({ success: true, deleted });
    }
    catch (error) {
        console.error('clearSavedRoutes error:', error);
        res.status(500).json({ success: false, message: 'Failed to clear saved routes' });
    }
};
export const deleteAccount = async (req, res) => {
    try {
        const userId = req.userId;
        const { password } = req.body;
        if (!password) {
            res.status(400).json({ success: false, message: 'Password is required to delete account' });
            return;
        }
        const user = await db.getUserWithPassword(userId);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password ?? '');
        if (!isMatch) {
            res.status(400).json({ success: false, message: 'Incorrect password' });
            return;
        }
        await db.clearSavedRoutesByUserId(userId);
        await db.deleteUser(userId);
        res.status(200).json({ success: true, message: 'Account deleted successfully' });
    }
    catch (error) {
        console.error('deleteAccount error:', error);
        res.status(500).json({ success: false, message: 'Failed to delete account' });
    }
};
//# sourceMappingURL=settingsController.js.map