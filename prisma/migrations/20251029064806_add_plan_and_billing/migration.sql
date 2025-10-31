-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('active', 'inactive', 'cancelled');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'unpaid');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('credit_card', 'e_wallet');

-- CreateEnum
CREATE TYPE "PaymentMethodStatus" AS ENUM ('active', 'deleted');

-- CreateEnum
CREATE TYPE "BillingStatus" AS ENUM ('active', 'complete', 'failed');

-- CreateTable
CREATE TABLE "plan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "bandwidthLimit" INTEGER NOT NULL,
    "apiCallLimit" INTEGER NOT NULL,
    "mediaAssetLimit" INTEGER NOT NULL,
    "status" "PlanStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "autoRenewal" BOOLEAN NOT NULL DEFAULT false,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'active',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'unpaid',
    "totalPrice" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_method" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "PaymentType" NOT NULL,
    "provider" TEXT,
    "accountNumber" TEXT NOT NULL,
    "status" "PaymentMethodStatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "payment_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billing_history" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "datePaid" TIMESTAMP(3) NOT NULL,
    "nominal" DECIMAL(65,30) NOT NULL,
    "status" "BillingStatus" NOT NULL,
    "invoiceUrl" TEXT,

    CONSTRAINT "billing_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_method" ADD CONSTRAINT "payment_method_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
