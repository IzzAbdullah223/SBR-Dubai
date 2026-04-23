import { format, addMinutes as fnsAddMinutes, differenceInMinutes, getDay } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const DUBAI_TZ = 'Asia/Dubai'

interface Schedule {
  weekday: { firstBus: string; lastBus: string; frequency: number }
  weekend: { firstBus: string; lastBus: string; frequency: number }
}

export const getDubaiTime = (): Date => {
  return toZonedTime(new Date(), DUBAI_TZ)
}

export const formatTime = (date: Date): string => {
  if (!date || isNaN(date.getTime())) return '--:-- --'
  return format(date, 'h:mm aa')   
}

export const formatTime24 = (date: Date): string => {
  if (!date || isNaN(date.getTime())) return '--:--'
  return format(date, 'HH:mm')   
}

export const getMinutesFromNow = (futureTime: Date, currentTime: Date): number => {
  if (!futureTime || !currentTime) return 0
  return differenceInMinutes(futureTime, currentTime)
}

export const isWithinServiceHours = (schedule: Schedule, currentTime: Date): boolean => {
  return true 
}

export const isWeekendInDubai = (currentTime: Date): boolean => {
  const day = getDay(currentTime)
  return day === 5 || day === 6   //friday or staruday 
}

export const addMinutes = (date: Date, minutes: number): Date => {
  if (!date || isNaN(date.getTime()) || isNaN(minutes)) return new Date()
  return fnsAddMinutes(date, Math.round(minutes))
}