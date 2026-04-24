import { prisma } from "./lib/prisma.js"
import { Prisma } from "./generated/prisma/browser.js"
import { calculateDistance } from "../services/geoCalculator.js"

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

export const getAllRoutes = async () => {
  return prisma.busRoute.findMany({
    include: { stops: true }
  })
}

export const getRouteByNumber = async (routeNumber: string) => {
  return prisma.busRoute.findUnique({
    where: { routeNumber },
    include: { stops: true }
  })
}


export const getAllStops = async () => {
  return prisma.busStop.findMany()
}

export const getStopById = async (stopId: string) => {
  return prisma.busStop.findUnique({
    where: { stopId }
  })
}

export const findNearbyStops = async (lat: number, lng: number, radiusKm: number) => {
  const stops = await getActiveStops()
  return stops
    .filter(stop => calculateDistance(lat, lng, stop.lat, stop.lng) <= radiusKm)
    .sort((a, b) =>
      calculateDistance(lat, lng, a.lat, a.lng) -
      calculateDistance(lat, lng, b.lat, b.lng)
    )
}


export const getLineById = async (lineId: string) => {
  return prisma.line.findUnique({
    where: { lineId }
  })
}


export const getSavedRoutesByUserId = async (userId: number) => {
  return prisma.savedRoute.findMany({
    where: { userId },
    orderBy: { lastUsed: 'desc' },
  })
}

export const getSavedRouteById = async (id: number) => {
  return prisma.savedRoute.findUnique({
    where: { id },
  })
}

export const createSavedRoute = async (data: {
  userId: number
  routeName: string
  originName: string
  originLat: number
  originLng: number
  destName: string
  destLat: number
  destLng: number
}) => {
  return prisma.savedRoute.create({ data })
}

export const deleteSavedRoute = async (id: number) => {
  return prisma.savedRoute.delete({
    where: { id },
  })
}


export const getWalletByUserId = async (userId: number) => {
  return prisma.virtualWallet.findUnique({
    where: { userId },
  })
}

export const createWallet = async (userId: number) => {
  const cardNumber = `01-${Math.random().toString().slice(2, 7)}`;
  return prisma.virtualWallet.create({
    data: { userId, cardNumber },
  })
}

export const updateWalletBalance = async (id: number, newBalance: number, rechargeAmount: number) => {
  return prisma.virtualWallet.update({
    where: { id },
    data: {
      balance:       newBalance,
      totalRecharges: { increment: rechargeAmount },
      lastRecharge:  new Date(),
      lastTransaction: new Date(),
    },
  })
}

export const createTransaction = async (data: {
  walletId:     number
  type:         'recharge' | 'deduction' | 'refund' | 'transfer'
  amount:       number
  description:  string
  status:       'pending' | 'completed' | 'failed' | 'refunded'
  balanceAfter: number
  routeNumber?: string
  fromStop?:    string
  toStop?:      string
}) => {
  return prisma.transaction.create({ data })
}

export const getTransactionsByWalletId = async (walletId: number, limit: number, skip: number) => {
  return prisma.transaction.findMany({
    where:   { walletId },
    orderBy: { timestamp: 'desc' },
    take:    limit,
    skip,
  })
}


export const getUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } })
}

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}

export const getUserWithPassword = async (id: number) => {
  return prisma.user.findUnique({ where: { id } })
}

export const updateUser = async (id: number, data: Prisma.UserUpdateInput) => {
  return prisma.user.update({ where: { id }, data })
}

export const deleteUser = async (id: number) => {
  return prisma.user.delete({ where: { id } })
}

// ── Favorite stops ─────────────────────────────────────────────────────────
export const getFavoriteStopsByUserId = async (userId: number) => {
  return prisma.favoriteStop.findMany({ where: { userId } })
}

export const addFavoriteStop = async (data: {
  userId: number
  stopId: string
  name: string
  lat: number
  lng: number
}) => {
  return prisma.favoriteStop.create({ data })
}

export const removeFavoriteStop = async (userId: number, stopId: string) => {
  return prisma.favoriteStop.deleteMany({ where: { userId, stopId } })
}

export const clearSavedRoutesByUserId = async (userId: number) => {
  const result = await prisma.savedRoute.deleteMany({ where: { userId } })
  return result.count
}

// ── Public profile helper — strips sensitive fields ────────────────────────
export const getPublicProfile = (user: Prisma.UserGetPayload<{}>) => {
  const { password, ...publicUser } = user as any;
  return publicUser;
}