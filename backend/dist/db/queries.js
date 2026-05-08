import { prisma } from "./lib/prisma.js";
import { Prisma } from "./generated/prisma/browser.js";
import { calculateDistance } from "../services/geoCalculator.js";
export const getActiveStops = async () => {
    return prisma.busStop.findMany({
        where: { status: 'active' }
    });
};
export const getRoutesByStopIds = async (stopIds) => {
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
    });
};
export const getStopsByStopIds = async (stopIds) => {
    return prisma.busStop.findMany({
        where: { stopId: { in: stopIds } }
    });
};
export const getAllRoutes = async () => {
    return prisma.busRoute.findMany({
        include: { stops: true }
    });
};
export const getRouteByNumber = async (routeNumber) => {
    return prisma.busRoute.findUnique({
        where: { routeNumber },
        include: { stops: true }
    });
};
export const getAllStops = async () => {
    return prisma.busStop.findMany();
};
export const getStopById = async (stopId) => {
    return prisma.busStop.findUnique({
        where: { stopId }
    });
};
export const findNearbyStops = async (lat, lng, radiusKm) => {
    const stops = await getActiveStops();
    return stops
        .filter(stop => calculateDistance(lat, lng, stop.lat, stop.lng) <= radiusKm)
        .sort((a, b) => calculateDistance(lat, lng, a.lat, a.lng) -
        calculateDistance(lat, lng, b.lat, b.lng));
};
export const getLineById = async (lineId) => {
    return prisma.line.findUnique({
        where: { lineId }
    });
};
export const getSavedRoutesByUserId = async (userId) => {
    return prisma.savedRoute.findMany({
        where: { userId },
        orderBy: { lastUsed: 'desc' },
    });
};
export const getSavedRouteById = async (id) => {
    return prisma.savedRoute.findUnique({
        where: { id },
    });
};
export const createSavedRoute = async (data) => {
    return prisma.savedRoute.create({ data });
};
export const deleteSavedRoute = async (id) => {
    return prisma.savedRoute.delete({
        where: { id },
    });
};
export const getWalletByUserId = async (userId) => {
    return prisma.virtualWallet.findUnique({
        where: { userId },
    });
};
export const createWallet = async (userId, startingBalance = 0) => {
    return prisma.virtualWallet.create({
        data: {
            userId,
            balance: startingBalance,
            // auto-generates cardNumber via pre-save equivalent
            cardNumber: `01-${Math.floor(10000 + Math.random() * 90000)}`,
        }
    });
};
export const updateWalletBalance = async (id, newBalance, rechargeAmount) => {
    return prisma.virtualWallet.update({
        where: { id },
        data: {
            balance: newBalance,
            totalRecharges: { increment: rechargeAmount },
            lastRecharge: new Date(),
            lastTransaction: new Date(),
        },
    });
};
export const createTransaction = async (data) => {
    return prisma.transaction.create({ data });
};
export const getTransactionsByWalletId = async (walletId, limit, skip) => {
    return prisma.transaction.findMany({
        where: { walletId },
        orderBy: { timestamp: 'desc' },
        take: limit,
        skip,
    });
};
export const getUserById = async (id) => {
    return prisma.user.findUnique({ where: { id } });
};
export const getUserByEmail = async (email) => {
    return prisma.user.findUnique({ where: { email } });
};
export const getUserWithPassword = async (id) => {
    return prisma.user.findUnique({ where: { id } });
};
export const updateUser = async (id, data) => {
    return prisma.user.update({ where: { id }, data });
};
export const deleteUser = async (id) => {
    return prisma.user.delete({ where: { id } });
};
// ── Favorite stops ─────────────────────────────────────────────────────────
export const getFavoriteStopsByUserId = async (userId) => {
    return prisma.favoriteStop.findMany({ where: { userId } });
};
export const addFavoriteStop = async (data) => {
    return prisma.favoriteStop.create({ data });
};
export const removeFavoriteStop = async (userId, stopId) => {
    return prisma.favoriteStop.deleteMany({ where: { userId, stopId } });
};
export const clearSavedRoutesByUserId = async (userId) => {
    const result = await prisma.savedRoute.deleteMany({ where: { userId } });
    return result.count;
};
// ── Public profile helper — strips sensitive fields ────────────────────────
export const getPublicProfile = (user) => {
    const { password, ...publicUser } = user;
    return publicUser;
};
//# sourceMappingURL=queries.js.map