import { z } from 'zod'

export const loginSchema = z.object({
  email:    z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z.object({
  name:            z.string().min(1, 'Name is required'),
  email:           z.string().email('Invalid email'),
  phone:           z.string().regex(/^(\+971|00971|0)?[0-9]{9}$/, 'Invalid UAE phone number').optional().or(z.literal('')),
  password:        z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path:    ['confirmPassword'],
})

export type LoginFormData  = z.infer<typeof loginSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>




export interface User {
  id: number
  name: string
  email: string
  phone?: string
  preferences: {
    language: string
    theme: string
    walkingSpeed: number
    optimization: string
  }
  favoriteStops: any[]
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


export interface Coordinate {
  lat: number
  lng: number
}

export interface ShapeResult {
  coordinates: Coordinate[]
  trimRatio:   number
}

export interface SavedRoute {
  id:          number
  routeName:   string
  originName:  string
  originLat:   number
  originLng:   number
  destName:    string
  destLat:     number
  destLng:     number
  createdAt:   string
}


export interface BusStop {
  stopId:    string
  name:      string
  lat:       number
  lng:       number
  routes?:   string[]
  amenities?: string[]
  type?:     string
  status?:   string
}

export interface FavoriteStop {
  id:      number
  stopId:  string
  name:    string
  lat:     number
  lng:     number
  savedAt: string
}

export interface Location {
  lat:  number
  lng:  number
  name: string
}

export interface PinnedStop {
  stopId: string
  name:   string
  lat:    number
  lng:    number
}

export interface SavedRoute {
  originName: string
  originLat:  number
  originLng:  number
  destName:   string
  destLat:    number
  destLng:    number
}


export interface Wallet {
  balance:      number
  cardNumber:   string | null
  isBalanceLow: boolean
  totalRecharges: number
  totalSpent:     number
  tripCount:      number
}