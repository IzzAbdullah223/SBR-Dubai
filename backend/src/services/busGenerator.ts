import { getStopsByStopIds } from '../db/queries.js'
import { calculateWalkingDistance } from './geoCalculator.js'
import * as timeHelper from './timeHelper.js'
import * as scheduleGen from './scheduleGenerator.js'
import type { Bus,  DirectRoute, TransferRoute, Schedule } from '../lib/types.js'
import type { RouteWithStops } from '../db/queries.js'

const DEFAULT_SCHEDULE: Schedule = {
  weekday: { firstBus: '05:00', lastBus: '23:30', frequency: 15 },
  weekend: { firstBus: '06:00', lastBus: '23:00', frequency: 20 },
}

const getRouteSchedule = (route: RouteWithStops): Schedule => {
  return (route.schedule as unknown as  Schedule) || DEFAULT_SCHEDULE
}

 

export const generateDirectBuses = (
  routeInfo:   DirectRoute,
  origin:      { lat: number; lng: number },
  currentTime: Date | null = null
): Bus[] => {
  const { route, originStop, destStop } = routeInfo
  const buses: Bus[] = []

  const dubaiTime = currentTime || timeHelper.getDubaiTime()
  const schedule  = getRouteSchedule(route)

  if (!timeHelper.isWithinServiceHours(schedule, dubaiTime)) return buses

  const frequency       = scheduleGen.getServiceFrequency(schedule, dubaiTime)
  const walkingDistance = calculateWalkingDistance(origin, originStop)
  const walkingTime     = scheduleGen.calculateWalkingTime(walkingDistance)
  const routeTravelTime = route.duration || 20
  const minDeparture    = walkingTime + 2

  const allArrivalTimes = scheduleGen.generateArrivalTimes(frequency, dubaiTime, 15)

  let arrivalTimes = allArrivalTimes
    .filter(dep => !isNaN(dep.minutesFromNow) && dep.minutesFromNow >= minDeparture)
    .slice(0, 5)

  if (arrivalTimes.length === 0) {
    const forced = scheduleGen.generateArrivalTimes(frequency, dubaiTime, 5, minDeparture)
    arrivalTimes = forced.filter(dep => !isNaN(dep.minutesFromNow))
  }

  if (arrivalTimes.length === 0) return buses

  const fare = route.fare as { nolFare?: number; baseFare?: number; cashFare?: number }

  arrivalTimes.forEach((arrival, i) => {
    const busId = `${route.routeNumber}-${Date.now()}-${i}`
    const totalJourneyTime = scheduleGen.calculateTotalJourneyTime(
      walkingTime,
      arrival.minutesFromNow,
      routeTravelTime
    )

    buses.push({
      busId,
      routeNumber:     route.routeNumber,
      routeName:       route.name || `Route ${route.routeNumber}`,
      routeType:       route.type || 'bus',
      color:           route.color || '#667eea',
      arrivalTime:     arrival.minutesFromNow,
      travelTime:      routeTravelTime,
      cost:            fare?.nolFare  || fare?.baseFare || 3,
      nolFare:         fare?.nolFare  || fare?.baseFare || 3,
      cashFare:        fare?.cashFare || (fare?.baseFare || 3) + 1,
      walkingDistance,
      walkingTime,
      transfers:       0,
      departureTime:   arrival.formatted,
      departureTime24: arrival.formatted24,
      totalJourneyTime,
      journeyType:     'direct',
      originStop: {
        stopId: originStop.stopId,
        name:   originStop.name,
        lat:    originStop.lat,
        lng:    originStop.lng,
      },
      destinationStop: {
        stopId: destStop.stopId,
        name:   destStop.name,
        lat:    destStop.lat,
        lng:    destStop.lng,
      },
      stops:           route.stops || [],
      lineId:          route.lineId      || null,
      lineIdReturn:    route.lineIdReturn || null,
    } as Bus)
  })

  return buses
}

 

export const generateTransferBuses = async (
  transferInfo:    TransferRoute,
  origin:          { lat: number; lng: number },
  currentTime:     Date | null = null,
  transferStopMap: Record<string, { stopId: string; name: string; lat: number; lng: number }> = {}
): Promise<Bus[]> => {
  const { route1, route2, originStop, transferStopId, destStop } = transferInfo

  const dubaiTime = currentTime || timeHelper.getDubaiTime()
  const schedule1 = getRouteSchedule(route1)
  const schedule2 = getRouteSchedule(route2)

  if (
    !timeHelper.isWithinServiceHours(schedule1, dubaiTime) ||
    !timeHelper.isWithinServiceHours(schedule2, dubaiTime)
  ) return []

  const transferStop = transferStopMap[transferStopId]
  if (!transferStop) return []

  const buses: Bus[]   = []
  const frequency1     = scheduleGen.getServiceFrequency(schedule1, dubaiTime)
  const walkingDistance = calculateWalkingDistance(origin, originStop)
  const walkingTime    = scheduleGen.calculateWalkingTime(walkingDistance)
  const leg1Duration   = route1.duration || 20
  const leg2Duration   = route2.duration || 20
  const transferWaitTime = 5
  const minDeparture   = walkingTime + 2

  const fare1 = route1.fare as { nolFare?: number; baseFare?: number; cashFare?: number }
  const fare2 = route2.fare as { nolFare?: number; baseFare?: number; cashFare?: number }

  const allLeg1Arrivals = scheduleGen.generateArrivalTimes(frequency1, dubaiTime, 15)

  let leg1Arrivals = allLeg1Arrivals
    .filter(dep => !isNaN(dep.minutesFromNow) && dep.minutesFromNow >= minDeparture)
    .slice(0, 3)

  if (leg1Arrivals.length === 0) {
    const forced = scheduleGen.generateArrivalTimes(frequency1, dubaiTime, 3, minDeparture)
    leg1Arrivals = forced.filter(dep => !isNaN(dep.minutesFromNow))
  }

  if (leg1Arrivals.length === 0) return buses

  const route1Stops   = route1.stops || []
  const transferIndex = route1Stops.findIndex(s => s.stopId === transferStopId)
  const transferRatio = transferIndex >= 0
    ? transferIndex / Math.max(route1Stops.length - 1, 1)
    : 0.5

  leg1Arrivals.forEach((leg1Arrival, i) => {
    if (isNaN(leg1Arrival.minutesFromNow)) return

    const timeToTransferStop = walkingTime + leg1Duration * transferRatio
    const arrivalAtTransfer  = leg1Arrival.minutesFromNow + timeToTransferStop
    const leg2DepartureMin   = Math.ceil(arrivalAtTransfer + transferWaitTime)

    if (isNaN(leg2DepartureMin)) return

    const leg2DepartureTime = timeHelper.addMinutes(dubaiTime, leg2DepartureMin)
    const totalTime         = scheduleGen.calculateTransferTime(leg1Duration, transferWaitTime, leg2Duration)

    const leg1Nol  = fare1?.nolFare  || fare1?.baseFare || 3
    const leg2Nol  = fare2?.nolFare  || fare2?.baseFare || 3
    const leg1Cash = fare1?.cashFare || leg1Nol + 1
    const leg2Cash = fare2?.cashFare || leg2Nol + 1

    const busId = `${route1.routeNumber}-${route2.routeNumber}-${Date.now()}-${i}`

    buses.push({
      busId,
      routeNumber:         `${route1.routeNumber} → ${route2.routeNumber}`,
      routeName:           `${route1.name || route1.routeNumber} + ${route2.name || route2.routeNumber}`,
      routeType:           'transfer',
      color:               route1.color || '#667eea',
      arrivalTime:         leg1Arrival.minutesFromNow,
      travelTime:          totalTime,
      cost:                leg1Nol + leg2Nol,
      nolFare:             leg1Nol + leg2Nol,
      cashFare:            leg1Cash + leg2Cash,
      walkingDistance,
      walkingTime,
      transfers:           1,
      departureTime:       leg1Arrival.formatted,
      departureTime24:     leg1Arrival.formatted24,
      leg1DepartureTime:   leg1Arrival.formatted,
      leg1DepartureTime24: leg1Arrival.formatted24,
      leg2DepartureTime:   timeHelper.formatTime(leg2DepartureTime),
      leg2DepartureTime24: timeHelper.formatTime24(leg2DepartureTime),
      totalJourneyTime:    totalTime,
      journeyType:         'transfer',
      leg1: {
        routeNumber:   route1.routeNumber,
        routeName:     route1.name || `Route ${route1.routeNumber}`,
        duration:      leg1Duration,
        cost:          leg1Nol,
        nolFare:       leg1Nol,
        cashFare:      leg1Cash,
        departureTime: leg1Arrival.formatted,
      },
      leg2: {
        routeNumber:   route2.routeNumber,
        routeName:     route2.name || `Route ${route2.routeNumber}`,
        duration:      leg2Duration,
        cost:          leg2Nol,
        nolFare:       leg2Nol,
        cashFare:      leg2Cash,
        departureTime: timeHelper.formatTime(leg2DepartureTime),
      },
      transferStop: {
        stopId: transferStop.stopId,
        name:   transferStop.name,
        lat:    transferStop.lat,
        lng:    transferStop.lng,
      },
      originStop: {
        stopId: originStop.stopId,
        name:   originStop.name,
        lat:    originStop.lat,
        lng:    originStop.lng,
      },
      destinationStop: {
        stopId: destStop.stopId,
        name:   destStop.name,
        lat:    destStop.lat,
        lng:    destStop.lng,
      },
      lineId:            route1.lineId       || null,
      lineIdReturn:      route1.lineIdReturn  || null,
      lineIdLeg2:        route2.lineId        || null,
      lineIdLeg2Return:  route2.lineIdReturn  || null,
    } as Bus)
  })

  return buses
}

 

export const generateAllBuses = async (
  routeData:   { directRoutes: DirectRoute[]; transferRoutes: TransferRoute[] },
  origin:      { lat: number; lng: number },
  currentTime: Date | null = null
): Promise<Bus[]> => {
  const allBuses:  Bus[]  = []
  const dubaiTime: Date   = currentTime || timeHelper.getDubaiTime()

  if (routeData.transferRoutes.length > 0) {
    const transferStopIds = routeData.transferRoutes.map(t => t.transferStopId)

 
    const transferStops = await getStopsByStopIds(transferStopIds)

    const transferStopMap: Record<string, { stopId: string; name: string; lat: number; lng: number }> = {}
    transferStops.forEach(s => {
      transferStopMap[s.stopId] = { stopId: s.stopId, name: s.name, lat: s.lat, lng: s.lng }
    })

    for (const transferInfo of routeData.transferRoutes) {
      const buses = await generateTransferBuses(transferInfo, origin, dubaiTime, transferStopMap)
      allBuses.push(...buses)
    }
  }

  for (const routeInfo of routeData.directRoutes) {
    const buses = generateDirectBuses(routeInfo, origin, dubaiTime)
    allBuses.push(...buses)
  }

  return allBuses
}