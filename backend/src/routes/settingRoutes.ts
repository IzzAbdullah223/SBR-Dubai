import { Router } from 'express';
import {
  getProfile,
  updateProfile,
  changePassword,
  updatePreferences,
  updateLanguage,
  clearSavedRoutes,
  deleteAccount,
  getFavoriteStops,
  addFavoriteStop,
  removeFavoriteStop,
} from '../controller/settingsController.js';
import { verifyToken } from '../middleware/verifyToken.js';

export const settingsRouter = Router();

settingsRouter.get('/settings/profile',                   verifyToken, getProfile);
settingsRouter.patch('/settings/profile',                 verifyToken, updateProfile);
settingsRouter.patch('/settings/password',                verifyToken, changePassword);
settingsRouter.patch('/settings/preferences',             verifyToken, updatePreferences);
settingsRouter.patch('/settings/language',                verifyToken, updateLanguage);
settingsRouter.delete('/settings/saved-routes',           verifyToken, clearSavedRoutes);
settingsRouter.delete('/settings/account',                verifyToken, deleteAccount);
settingsRouter.get('/settings/favorite-stops',            verifyToken, getFavoriteStops);
settingsRouter.post('/settings/favorite-stops',           verifyToken, addFavoriteStop);
settingsRouter.delete('/settings/favorite-stops/:stopId', verifyToken, removeFavoriteStop);
