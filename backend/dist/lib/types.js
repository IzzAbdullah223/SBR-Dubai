import {} from '../db/queries.js';
import z from 'zod';
export const LatLng = z.object({
    lat: z.number({ message: 'lat is required' }),
    lng: z.number({ message: 'lng is required' }),
});
export const FindBusesSchema = z.object({
    origin: LatLng,
    destination: LatLng,
    optimizationMode: z
        .enum(['fastest', 'cheapest', 'less_walking', 'fewest_transfers'])
        .optional(),
});
//# sourceMappingURL=types.js.map