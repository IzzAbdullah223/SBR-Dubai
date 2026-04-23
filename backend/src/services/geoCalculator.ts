 

import { getActiveStops } from '../db/queries.js'
export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export const findNearbyStops = async (lat: number, lng: number, radiusKm = 1.0) => {
  const allStops = await getActiveStops()
  return allStops
    .map(stop => ({
      ...stop,
      distance: calculateDistance(lat, lng, stop.lat, stop.lng)
    }))
    .filter(stop => stop.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance)
}

export const calculateWalkingDistance = (
  coords: { lat: number; lng: number },
  busStop: { lat: number; lng: number }
): number => {
  const distance = calculateDistance(coords.lat, coords.lng, busStop.lat, busStop.lng)
  return Math.round(distance * 100) / 100
}