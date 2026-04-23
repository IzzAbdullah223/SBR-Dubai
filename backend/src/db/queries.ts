import { prisma } from "./lib/prisma.js"
import { Prisma } from "./generated/prisma/browser.js"

export type RouteWithStops = Prisma.BusRouteGetPayload<{
  include: { stops: true }
}>


export const getActiveStops = async () => {
  return prisma.busStop.findMany({
    where: { status: 'active' }
  })
}

 

 
 
export const getRoutesByStopIds = async (stopIds: string[]) => {
  return prisma.busRoute.findMany({
    where: {
      stops: {
        some: {
          stopId: { in: stopIds }
        }
      }
    },
    include: {
      stops: true   
    }
  })
}


export const getStopsByStopIds = async (stopIds: string[]) => {
  return prisma.busStop.findMany({
    where: { stopId: { in: stopIds } }
  })
}
