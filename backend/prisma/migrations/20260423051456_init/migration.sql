-- CreateEnum
CREATE TYPE "Language" AS ENUM ('en', 'ar');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('light', 'dark');

-- CreateEnum
CREATE TYPE "OptimizationMode" AS ENUM ('fastest', 'cheapest', 'less_walking', 'fewest_transfers');

-- CreateEnum
CREATE TYPE "SignupSource" AS ENUM ('web', 'mobile', 'admin');

-- CreateEnum
CREATE TYPE "StopStatus" AS ENUM ('active', 'inactive', 'maintenance');

-- CreateEnum
CREATE TYPE "StopType" AS ENUM ('stop', 'station', 'terminal');

-- CreateEnum
CREATE TYPE "OptimizationPreference" AS ENUM ('fastest', 'cheapest', 'minimal_walking', 'minimal_transfers');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "language" "Language" NOT NULL DEFAULT 'en',
    "theme" "Theme" NOT NULL DEFAULT 'light',
    "walkingSpeed" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "notifyEmail" BOOLEAN NOT NULL DEFAULT true,
    "notifyPush" BOOLEAN NOT NULL DEFAULT true,
    "notifyBus" BOOLEAN NOT NULL DEFAULT true,
    "optimization" "OptimizationMode" NOT NULL DEFAULT 'fastest',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "lastLogin" TIMESTAMP(3),
    "signupSource" "SignupSource" NOT NULL DEFAULT 'web',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteStop" (
    "id" SERIAL NOT NULL,
    "stopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteStop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusStop" (
    "id" SERIAL NOT NULL,
    "stopId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "routes" TEXT[],
    "amenities" TEXT[],
    "type" "StopType" NOT NULL DEFAULT 'stop',
    "operator" TEXT NOT NULL DEFAULT 'Roads and Transport Authority (RTA) Dubai',
    "osm_id" INTEGER,
    "zone" TEXT,
    "status" "StopStatus" NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusStop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusRoute" (
    "id" SERIAL NOT NULL,
    "routeNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" JSONB NOT NULL,
    "fare" JSONB NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL DEFAULT 20,
    "distance" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "numStops" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT NOT NULL DEFAULT '#667eea',
    "textColor" TEXT NOT NULL DEFAULT '#FFFFFF',
    "type" TEXT NOT NULL DEFAULT '3',
    "ineId" TEXT,
    "lineIdReturn" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BusRoute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteStop" (
    "id" SERIAL NOT NULL,
    "stopId" TEXT NOT NULL,
    "stopSequence" INTEGER NOT NULL,
    "routeId" INTEGER NOT NULL,

    CONSTRAINT "RouteStop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Line" (
    "id" SERIAL NOT NULL,
    "lineId" TEXT NOT NULL,
    "coordinates" JSONB NOT NULL,
    "pointCount" INTEGER NOT NULL DEFAULT 0,
    "totalDistance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedRoute" (
    "id" SERIAL NOT NULL,
    "routeName" TEXT NOT NULL,
    "originName" TEXT NOT NULL,
    "originStopId" TEXT,
    "originLat" DOUBLE PRECISION NOT NULL,
    "originLng" DOUBLE PRECISION NOT NULL,
    "destName" TEXT NOT NULL,
    "destStopId" TEXT,
    "destLat" DOUBLE PRECISION NOT NULL,
    "destLng" DOUBLE PRECISION NOT NULL,
    "optimizationPreference" "OptimizationPreference" NOT NULL DEFAULT 'fastest',
    "timesUsed" INTEGER NOT NULL DEFAULT 0,
    "lastUsed" TIMESTAMP(3),
    "averageTime" DOUBLE PRECISION,
    "averageCost" DOUBLE PRECISION,
    "notificationsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "notifyDays" INTEGER[],
    "notifyTime" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "tags" TEXT[],
    "color" TEXT NOT NULL DEFAULT '#4CAF50',
    "notes" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedRoute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BusStop_stopId_key" ON "BusStop"("stopId");

-- CreateIndex
CREATE UNIQUE INDEX "BusRoute_routeNumber_key" ON "BusRoute"("routeNumber");

-- CreateIndex
CREATE INDEX "RouteStop_stopId_idx" ON "RouteStop"("stopId");

-- CreateIndex
CREATE UNIQUE INDEX "Line_lineId_key" ON "Line"("lineId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedRoute_userId_originLat_originLng_destLat_destLng_key" ON "SavedRoute"("userId", "originLat", "originLng", "destLat", "destLng");

-- AddForeignKey
ALTER TABLE "FavoriteStop" ADD CONSTRAINT "FavoriteStop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteStop" ADD CONSTRAINT "RouteStop_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "BusRoute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedRoute" ADD CONSTRAINT "SavedRoute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
