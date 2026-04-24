import { type RouteWithStops } from '../db/queries.js';
import z from 'zod';
export declare const LatLng: z.ZodObject<{
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, z.z.core.$strip>;
export declare const FindBusesSchema: z.ZodObject<{
    origin: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.z.core.$strip>;
    destination: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, z.z.core.$strip>;
    optimizationMode: z.ZodOptional<z.ZodEnum<{
        fastest: "fastest";
        cheapest: "cheapest";
        less_walking: "less_walking";
        fewest_transfers: "fewest_transfers";
    }>>;
}, z.z.core.$strip>;
export interface Weights {
    time: number;
    cost: number;
    walkingDistance: number;
    transfers: number;
}
export interface NormalizedWeights {
    arrivalTime: number;
    travelTime: number;
    cost: number;
    walkingDistance: number;
    transfers: number;
}
export interface Bus {
    busId: string;
    routeNumber: string;
    routeName: string;
    routeType: string;
    color: string;
    arrivalTime: number;
    travelTime: number;
    cost: number;
    nolFare: number;
    cashFare: number;
    walkingDistance: number;
    walkingTime: number;
    transfers: number;
    departureTime: string;
    departureTime24: string;
    totalJourneyTime: number;
    journeyType: 'direct' | 'transfer';
    score?: number;
    upcomingDepartures?: {
        departureTime: string;
        departureTime24: string;
        minutesFromNow: number;
    }[];
    [key: string]: unknown;
}
export interface Schedule {
    weekday: {
        firstBus: string;
        lastBus: string;
        frequency: number;
    };
    weekend: {
        firstBus: string;
        lastBus: string;
        frequency: number;
    };
}
export interface ArrivalTime {
    time: Date;
    minutesFromNow: number;
    formatted: string;
    formatted24: string;
}
export interface NearbyStop {
    stopId: string;
    name: string;
    lat: number;
    lng: number;
    distance: number;
}
export interface DirectRoute {
    route: RouteWithStops;
    originStop: NearbyStop;
    destStop: NearbyStop;
    type: 'direct';
}
export interface TransferRoute {
    route1: RouteWithStops;
    route2: RouteWithStops;
    originStop: NearbyStop;
    transferStopId: string;
    destStop: NearbyStop;
    type: 'transfer';
}
//# sourceMappingURL=types.d.ts.map