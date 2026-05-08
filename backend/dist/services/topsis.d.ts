import type { Bus } from '../lib/types.js';
interface Weights {
    totalJourneyTime: number;
    cost: number;
    walkingDistance: number;
    transfers: number;
}
export declare const rankBuses: (buses: Bus[], weights: Weights) => Bus[];
export {};
//# sourceMappingURL=topsis.d.ts.map