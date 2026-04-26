import { type Request, type Response, type NextFunction } from 'express';
export interface AuthRequest extends Request {
    userId?: number;
}
export declare const verifyToken: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=verifyToken.d.ts.map