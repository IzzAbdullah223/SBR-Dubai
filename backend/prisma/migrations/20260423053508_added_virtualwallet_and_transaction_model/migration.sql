-- CreateEnum
CREATE TYPE "WalletStatus" AS ENUM ('active', 'suspended', 'closed');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('recharge', 'deduction', 'refund', 'transfer');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- CreateTable
CREATE TABLE "VirtualWallet" (
    "id" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cardNumber" TEXT,
    "status" "WalletStatus" NOT NULL DEFAULT 'active',
    "lowBalanceThreshold" DOUBLE PRECISION NOT NULL DEFAULT 10,
    "totalRecharges" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalSpent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tripCount" INTEGER NOT NULL DEFAULT 0,
    "lastRecharge" TIMESTAMP(3),
    "lastTransaction" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VirtualWallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'completed',
    "balanceAfter" DOUBLE PRECISION NOT NULL,
    "routeNumber" TEXT,
    "fromStop" TEXT,
    "toStop" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "walletId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VirtualWallet_cardNumber_key" ON "VirtualWallet"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "VirtualWallet_userId_key" ON "VirtualWallet"("userId");

-- AddForeignKey
ALTER TABLE "VirtualWallet" ADD CONSTRAINT "VirtualWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "VirtualWallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
