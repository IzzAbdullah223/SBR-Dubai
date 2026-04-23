import * as timeHelper from './timeHelper.js'

import {type Schedule, type ArrivalTime} from '../lib/types.js'

 

export const calculateWalkingTime = (distanceKm: number): number => {
  const WALKING_SPEED_KMH = 5
  return Math.ceil((distanceKm / WALKING_SPEED_KMH) * 60)
}

export const getServiceFrequency = (schedule: Schedule, currentTime: Date): number => {
  const isWeekend = timeHelper.isWeekendInDubai(currentTime)
  return isWeekend ? schedule.weekend.frequency : schedule.weekday.frequency
}

export const generateArrivalTimes = (
  frequency: number,
  currentTime: Date,
  count = 5,
  forceMinOffset: number | null = null
): ArrivalTime[] => {
  const arrivals: ArrivalTime[] = []

  if (!frequency || frequency <= 0) frequency = 15

  let firstBusOffset: number

  if (forceMinOffset !== null && !isNaN(forceMinOffset) && forceMinOffset > 0) {
    firstBusOffset = Math.ceil(forceMinOffset / frequency) * frequency
    if (firstBusOffset < forceMinOffset) firstBusOffset += frequency
  } else {
    const minWait = Math.max(3, Math.floor(frequency * 0.2))
    const maxWait = frequency - 1
    firstBusOffset = Math.floor(Math.random() * (maxWait - minWait + 1)) + minWait
  }

  if (isNaN(firstBusOffset) || firstBusOffset <= 0) firstBusOffset = frequency

  for (let i = 0; i < count; i++) {
    const minutesToAdd = firstBusOffset + i * frequency
    const arrivalTime = timeHelper.addMinutes(currentTime, minutesToAdd)
    arrivals.push({
      time:           arrivalTime,
      minutesFromNow: timeHelper.getMinutesFromNow(arrivalTime, currentTime),
      formatted:      timeHelper.formatTime(arrivalTime),
      formatted24:    timeHelper.formatTime24(arrivalTime),
    })
  }

  return arrivals
}

export const calculateTotalJourneyTime = (
  walkingTimeMin: number,
  waitingTimeMin: number,
  travelTimeMin: number
): number => walkingTimeMin + waitingTimeMin + travelTimeMin

export const calculateTransferTime = (
  leg1Duration: number,
  transferWaitTime: number,
  leg2Duration: number
): number => leg1Duration + transferWaitTime + leg2Duration

export const estimateTransferStopArrival = (
  busArrivalMin: number,
  walkingTimeMin: number,
  leg1Duration: number,
  transferRatio = 0.5
): number => busArrivalMin + walkingTimeMin + leg1Duration * transferRatio