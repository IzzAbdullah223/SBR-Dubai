 
import {type RouteWithStops} from '../db/queries.js'

export interface Weights {
  time: number
  cost: number
  walkingDistance: number
  transfers: number
}

export interface NormalizedWeights {
  arrivalTime: number
  travelTime: number
  cost: number
  walkingDistance: number
  transfers: number
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