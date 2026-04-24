import { type NearbyStop, type DirectRoute, type TransferRoute } from '../lib/types.js';
export declare const findDirectRoutes: (originStops: NearbyStop[], destStops: NearbyStop[]) => Promise<DirectRoute[]>;
export declare const findRoutesWithTransfer: (originStops: NearbyStop[], destStops: NearbyStop[]) => Promise<TransferRoute[]>;
export declare const findAllRoutes: (origin: {
    lat: number;
    lng: number;
}, destination: {
    lat: number;
    lng: number;
}) => Promise<{
    success: boolean;
    message: string;
    originStops: {
        distance: number;
        id: number;
        stopId: string;
        name: string;
        lat: number;
        lng: number;
        routes: string[];
        amenities: string[];
        type: import("../db/generated/prisma/enums.js").StopType;
        operator: string;
        osm_id: number | null;
        zone: string | null;
        status: import("../db/generated/prisma/enums.js").StopStatus;
        createdAt: Date;
        updatedAt: Date;
    }[];
    destStops: {
        distance: number;
        id: number;
        stopId: string;
        name: string;
        lat: number;
        lng: number;
        routes: string[];
        amenities: string[];
        type: import("../db/generated/prisma/enums.js").StopType;
        operator: string;
        osm_id: number | null;
        zone: string | null;
        status: import("../db/generated/prisma/enums.js").StopStatus;
        createdAt: Date;
        updatedAt: Date;
    }[];
    directRoutes: never[];
    transferRoutes: never[];
} | {
    success: boolean;
    originStops: {
        distance: number;
        id: number;
        stopId: string;
        name: string;
        lat: number;
        lng: number;
        routes: string[];
        amenities: string[];
        type: import("../db/generated/prisma/enums.js").StopType;
        operator: string;
        osm_id: number | null;
        zone: string | null;
        status: import("../db/generated/prisma/enums.js").StopStatus;
        createdAt: Date;
        updatedAt: Date;
    }[];
    destStops: {
        distance: number;
        id: number;
        stopId: string;
        name: string;
        lat: number;
        lng: number;
        routes: string[];
        amenities: string[];
        type: import("../db/generated/prisma/enums.js").StopType;
        operator: string;
        osm_id: number | null;
        zone: string | null;
        status: import("../db/generated/prisma/enums.js").StopStatus;
        createdAt: Date;
        updatedAt: Date;
    }[];
    directRoutes: DirectRoute[];
    transferRoutes: TransferRoute[];
    message?: never;
}>;
//# sourceMappingURL=routeFinder.d.ts.map