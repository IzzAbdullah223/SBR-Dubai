import type { Bus, DirectRoute, TransferRoute } from '../lib/types.js';
export declare const generateDirectBuses: (routeInfo: DirectRoute, origin: {
    lat: number;
    lng: number;
}, currentTime?: Date | null) => Bus[];
export declare const generateTransferBuses: (transferInfo: TransferRoute, origin: {
    lat: number;
    lng: number;
}, currentTime?: Date | null, transferStopMap?: Record<string, {
    stopId: string;
    name: string;
    lat: number;
    lng: number;
}>) => Promise<Bus[]>;
export declare const generateAllBuses: (routeData: {
    directRoutes: DirectRoute[];
    transferRoutes: TransferRoute[];
}, origin: {
    lat: number;
    lng: number;
}, currentTime?: Date | null) => Promise<Bus[]>;
//# sourceMappingURL=busGenerator.d.ts.map