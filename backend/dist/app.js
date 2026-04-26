import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { busRouteRouter } from './routes/busRouteRoutes.js';
import { busStopRouter } from './routes/busStopRoutes.js';
import { topsisRouter } from './routes/topsisRoutes.js';
import { shapeRouter } from './routes/shapeRoutes.js';
import { savedRouteRouter } from './routes/savedRoutes.js';
import { walletRouter } from './routes/walletRoutes.js';
import { settingsRouter } from './routes/settingRoutes.js';
import { authRouter } from './routes/authRoutes.js';
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
}));
app.use(express.json());
app.use('/api', authRouter);
app.use('/api', busStopRouter);
app.use('/api', busRouteRouter);
app.use('/api', topsisRouter);
app.use('/api', shapeRouter);
app.use('/api', savedRouteRouter);
app.use('/api', walletRouter);
app.use('/api', settingsRouter);
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Smart Bus Route API is running',
        timestamp: new Date().toISOString(),
    });
});
app.use((req, res) => {
    res.status(404).json({ success: false, error: 'Route not found' });
});
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health: http://localhost:${PORT}/health\n`);
});
export default app;
//# sourceMappingURL=app.js.map