export declare const calculateDistance: (lat1: number, lng1: number, lat2: number, lng2: number) => number;
export declare const findNearbyStops: (lat: number, lng: number, radiusKm?: number) => Promise<{
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
}[]>;
export declare const calculateWalkingDistance: (coords: {
    lat: number;
    lng: number;
}, busStop: {
    lat: number;
    lng: number;
}) => number;
//# sourceMappingURL=geoCalculator.d.ts.map