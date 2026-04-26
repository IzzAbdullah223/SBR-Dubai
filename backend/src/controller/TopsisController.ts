import { type Request, type Response } from 'express'
import * as routeFinder from '../services/routeFinder.js'
import * as busGenerator from '../services/busGenerator.js'
import * as topsis from '../services/topsis.js'
import { calculateDistance } from '../services/geoCalculator.js'
import type { Weights, Bus } from '../lib/types.js'
import { FindBusesSchema } from '../lib/types.js'

export const MODE_WEIGHTS: Record<string, Weights> = {
  fastest:          { totalJourneyTime: 0.70, cost: 0.15, walkingDistance: 0.05, transfers: 0.10 },
  cheapest:         { totalJourneyTime: 0.15, cost: 0.65, walkingDistance: 0.10, transfers: 0.10 },
  less_walking:     { totalJourneyTime: 0.15, cost: 0.10, walkingDistance: 0.65, transfers: 0.10 },
  fewest_transfers: { totalJourneyTime: 0.20, cost: 0.15, walkingDistance: 0.10, transfers: 0.55 },
}

export const findBuses = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsed = FindBusesSchema.safeParse(req.body)
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]
      const field      = firstError?.path[0]
      const errorCode  =
        field === 'origin'      ? 'INVALID_ORIGIN'      :
        field === 'destination' ? 'INVALID_DESTINATION' :
                                  'MISSING_FIELDS'
      res.status(400).json({ success: false, errorCode, message: firstError?.message ?? 'Invalid request body.' })
      return
    }

    const { origin, destination, optimizationMode } = parsed.data

    const distKm = calculateDistance(origin.lat, origin.lng, destination.lat, destination.lng)
    if (distKm < 0.05) {
      res.status(400).json({ success: false, errorCode: 'SAME_LOCATION', message: 'Origin and destination are too close to each other.' })
      return
    }

    const weights: Weights = MODE_WEIGHTS[optimizationMode ?? 'fastest'] ?? MODE_WEIGHTS['fastest']!

    const routeData = await routeFinder.findAllRoutes(origin, destination)

    if (routeData.originStops.length === 0 && routeData.destStops.length === 0) {
      res.status(404).json({ success: false, errorCode: 'NO_STOPS_BOTH', message: 'No bus stops found near your origin or destination.' })
      return
    }
    if (routeData.originStops.length === 0) {
      res.status(404).json({ success: false, errorCode: 'NO_ORIGIN_STOPS', message: 'No bus stops found near your origin.' })
      return
    }
    if (routeData.destStops.length === 0) {
      res.status(404).json({ success: false, errorCode: 'NO_DEST_STOPS', message: 'No bus stops found near your destination.' })
      return
    }
    if (!routeData.success) {
      res.status(404).json({ success: false, errorCode: 'NO_STOPS', message: routeData.message ?? 'No bus stops found.' })
      return
    }
    if (routeData.directRoutes.length === 0 && routeData.transferRoutes.length === 0) {
      res.status(404).json({ success: false, errorCode: 'NO_ROUTES', message: 'No routes connect these locations.' })
      return
    }

    const allBuses = await busGenerator.generateAllBuses(routeData, origin)

    if (allBuses.length === 0) {
      res.status(404).json({ success: false, errorCode: 'OUT_OF_SERVICE', message: 'Routes found but no buses currently running. Dubai RTA operates 5:00 AM to 11:30 PM.' })
      return
    }

    const busGroups: Record<string, Bus[]> = {}
    for (const bus of allBuses) {
      if (!busGroups[bus.routeNumber]) busGroups[bus.routeNumber] = []
      busGroups[bus.routeNumber]!.push(bus)
    }

    const representatives = Object.values(busGroups)
      .flatMap(group => {
        const sorted = [...group].sort((a, b) => a.arrivalTime - b.arrivalTime)
        const rep = sorted[0]
        if (!rep) return []
        rep.upcomingDepartures = sorted.map(b => ({
          departureTime:   b.departureTime,
          departureTime24: b.departureTime24,
          minutesFromNow:  b.arrivalTime,
        }))
        return [rep]
      })
      .filter((b): b is Bus => b !== undefined)

    let rankedBuses
    try {
      rankedBuses = topsis.rankBuses(representatives, weights)
    } catch (topsisError) {
      console.error('TOPSIS ranking failed:', topsisError)
      rankedBuses = representatives.map(b => ({ ...b, score: 0 }))
    }

    res.status(200).json({
      success: true,
      count:   rankedBuses.length,
      buses:   rankedBuses,
      stats: {
        directRoutes:   routeData.directRoutes.length,
        transferRoutes: routeData.transferRoutes.length,
        totalBuses:     rankedBuses.length,
      },
    })

  } catch (error) {
    console.error('Error in findBuses:', error)
    res.status(500).json({ success: false, errorCode: 'SERVER_ERROR', message: 'Something went wrong. Please try again.' })
  }
}

 
export const rankBuses = async (req: Request, res: Response): Promise<void> => {
  try {
    const { buses, optimizationMode } = req.body

    if (!buses || !Array.isArray(buses) || buses.length === 0) {
      res.status(400).json({ success: false, message: 'buses array is required' })
      return
    }

    const weights: Weights = MODE_WEIGHTS[optimizationMode ?? 'fastest'] ?? MODE_WEIGHTS['fastest']!
    const ranked = topsis.rankBuses(buses as Bus[], weights)

    res.status(200).json({ success: true, count: ranked.length, buses: ranked })

  } catch (error) {
    console.error('Error in rankBuses:', error)
    res.status(500).json({ success: false, message: 'Ranking failed.' })
  }
}