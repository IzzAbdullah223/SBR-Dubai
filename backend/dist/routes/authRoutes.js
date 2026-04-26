import { Router } from 'express';
import { signup, login } from '../controller/authController.js';
export const authRouter = Router();
authRouter.post('/auth/signup', signup);
authRouter.post('/auth/login', login);
//# sourceMappingURL=authRoutes.js.map