import { type Response } from 'express';
import { type AuthRequest } from '../middleware/verifyToken.js';
export declare const getProfile: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateProfile: (req: AuthRequest, res: Response) => Promise<void>;
export declare const changePassword: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updatePreferences: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateLanguage: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getFavoriteStops: (req: AuthRequest, res: Response) => Promise<void>;
export declare const addFavoriteStop: (req: AuthRequest, res: Response) => Promise<void>;
export declare const removeFavoriteStop: (req: AuthRequest, res: Response) => Promise<void>;
export declare const clearSavedRoutes: (req: AuthRequest, res: Response) => Promise<void>;
export declare const deleteAccount: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=settingsController.d.ts.map