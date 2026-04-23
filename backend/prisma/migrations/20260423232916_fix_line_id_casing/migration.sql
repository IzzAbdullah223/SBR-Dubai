/*
  Warnings:

  - You are about to drop the column `ineId` on the `BusRoute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BusRoute" DROP COLUMN "ineId",
ADD COLUMN     "lineId" TEXT;
