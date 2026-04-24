import { type Request, type Response } from 'express';
export declare const getProfile: (req: Request, res: Response) => Promise<void>;
export declare const updateProfile: (req: Request, res: Response) => Promise<void>;
export declare const changePassword: (req: Request, res: Response) => Promise<void>;
export declare const updatePreferences: (req: Request, res: Response) => Promise<void>;
export declare const updateLanguage: (req: Request, res: Response) => Promise<void>;
export declare const getFavoriteStops: (req: Request, res: Response) => Promise<void>;
export declare const addFavoriteStop: (req: Request, res: Response) => Promise<void>;
export declare const removeFavoriteStop: (req: Request, res: Response) => Promise<void>;
export declare const clearSavedRoutes: (req: Request, res: Response) => Promise<void>;
export declare const deleteAccount: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=settingsController.d.ts.map