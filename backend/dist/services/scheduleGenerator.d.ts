import { type Schedule, type ArrivalTime } from '../lib/types.js';
export declare const calculateWalkingTime: (distanceKm: number) => number;
export declare const getServiceFrequency: (schedule: Schedule, currentTime: Date) => number;
export declare const generateArrivalTimes: (frequency: number, currentTime: Date, count?: number, forceMinOffset?: number | null) => ArrivalTime[];
export declare const calculateTotalJourneyTime: (walkingTimeMin: number, waitingTimeMin: number, travelTimeMin: number) => number;
export declare const calculateTransferTime: (leg1Duration: number, transferWaitTime: number, leg2Duration: number) => number;
export declare const estimateTransferStopArrival: (busArrivalMin: number, walkingTimeMin: number, leg1Duration: number, transferRatio?: number) => number;
//# sourceMappingURL=scheduleGenerator.d.ts.map