
import {type RouteWithStops} from '../db/queries.js'
import z from 'zod';

export const LatLng = z.object({
  lat: z.number({ message: 'lat is required' }),
  lng: z.number({ message: 'lng is required' }),
});

export const FindBusesSchema = z.object({
  origin:           LatLng,
  destination:      LatLng,
  optimizationMode: z
    .enum(['fastest', 'cheapest', 'less_walking', 'fewest_transfers'])
    .optional(),
});


export interface Weights {
  totalJourneyTime: number
  cost:             number
  walkingDistance:  number
  transfers:        number
}

 
export interface Bus {
  busId: string
  routeNumber: string
  routeName: string
  routeType: string
  color: string
  arrivalTime: number
  travelTime: number
  cost: number
  nolFare: number
  cashFare: number
  walkingDistance: number
  walkingTime: number
  transfers: number
  departureTime: string
  departureTime24: string
  totalJourneyTime: number
  journeyType: 'direct' | 'transfer'
  score?: number
  upcomingDepartures?: { departureTime: string; departureTime24: string; minutesFromNow: number }[]
  [key: string]: unknown
}

export interface Schedule {
  weekday: { firstBus: string; lastBus: string; frequency: number }
  weekend: { firstBus: string; lastBus: string; frequency: number }
}

export interface ArrivalTime {
  time: Date
  minutesFromNow: number
  formatted: string
  formatted24: string
}

export interface NearbyStop {
  stopId:   string
  name:     string
  lat:      number
  lng:      number
  distance: number
}

export interface DirectRoute {
  route:      RouteWithStops
  originStop: NearbyStop
  destStop:   NearbyStop
  type:       'direct'
}

export interface TransferRoute {
  route1:         RouteWithStops
  route2:         RouteWithStops
  originStop:     NearbyStop
  transferStopId: string
  destStop:       NearbyStop
  type:           'transfer'
}