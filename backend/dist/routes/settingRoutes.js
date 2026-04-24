import { Router } from 'express';
import { getProfile, updateProfile, changePassword, updatePreferences, updateLanguage, clearSavedRoutes, deleteAccount, getFavoriteStops, addFavoriteStop, removeFavoriteStop, } from '../controller/settingsController.js';
export const settingsRouter = Router();
// auth here later
settingsRouter.get('/settings/profile', getProfile);
settingsRouter.patch('/settings/profile', updateProfile);
settingsRouter.patch('/settings/password', changePassword);
settingsRouter.patch('/settings/preferences', updatePreferences);
settingsRouter.patch('/settings/language', updateLanguage);
settingsRouter.delete('/settings/saved-routes', clearSavedRoutes);
settingsRouter.delete('/settings/account', deleteAccount);
settingsRouter.get('/settings/favorite-stops', getFavoriteStops);
settingsRouter.post('/settings/favorite-stops', addFavoriteStop);
settingsRouter.delete('/settings/favorite-stops/:stopId', removeFavoriteStop);
//# sourceMappingURL=settingRoutes.js.map