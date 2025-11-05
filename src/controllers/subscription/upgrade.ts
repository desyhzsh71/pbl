import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { UpgradeSubscriptionDTO } from "../../types/subscription.types";

// upgrade subscription
export async function upgradeSubscription(req: Request, res: Response) {
    try {
        const userId = req.user?.id;
        const { organizationId } = req.query;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const { newPlanId, effectiveDate } = req.body as UpgradeSubscriptionDTO;

        if (!newPlanId) {
            return res.status(400).json({
                success: false,
                message: "New plan ID is required",
            });
        }

        const where: any = {
            status: "ACTIVE",
        };

        if (organizationId) {
            where.organizationId = organizationId;
        } else {
            where.userId = userId;
            where.organizationId = null;
        }

        const currentSubscription = await prisma.subscription.findFirst({
            where,
            include: {
                plan: true,
            },
        });

        if (!currentSubscription) {
            return res.status(404).json({
                success: false,
                message: "No active subscription found to upgrade",
            });
        }

        const newPlan = await prisma.plan.findUnique({
            where: { id: newPlanId },
        });

        if (!newPlan || !newPlan.isActive) {
            return res.status(404).json({
                success: false,
                message: "New plan not found or inactive",
            });
        }

        // upgrade validasi-> plan baru harus ditingkatkan
        const currentPrice = Number(currentSubscription.plan.price);
        const newPrice = Number(newPlan.price);

        if (newPrice <= currentPrice) {
            return res.status(400).json({
                success: false,
                message: "New plan must be a higher tier. Use downgrade for lower tiers.",
            });
        }

        // menghitung jumlah
        const now = new Date();
        const endDate = currentSubscription.endDate ? new Date(currentSubscription.endDate) : now;
        const totalDays = Math.ceil((endDate.getTime() - currentSubscription.startDate.getTime()) / (1000 * 60 * 60 * 24));
        const remainingDays = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        const unusedAmount = (currentPrice / totalDays) * remainingDays;
        const proratedAmount = newPrice - unusedAmount;

        // update subscription saat ini jadi dibatalkan (cancelled)
        await prisma.subscription.update({
            where: { id: currentSubscription.id },
            data: {
                status: "CANCELLED",
                autoRenew: false,
            },
        });

        // create new subscription
        const upgradeDate = effectiveDate ? new Date(effectiveDate) : now;
        const newEndDate = new Date(upgradeDate);

        if (newPlan.billingCycle === "MONTHLY") {
            newEndDate.setMonth(newEndDate.getMonth() + 1);
        } else {
            newEndDate.setFullYear(newEndDate.getFullYear() + 1);
        }

        const newSubscription = await prisma.subscription.create({
            data: {
                userId: organizationId ? null : userId,
                organizationId: organizationId ? (organizationId as string) : null,
                planId: newPlanId,
                status: "ACTIVE",
                startDate: upgradeDate,
                endDate: newEndDate,
                autoRenew: currentSubscription.autoRenew,
                lastPaymentDate: now,
                nextPaymentDate: currentSubscription.autoRenew ? newEndDate : null,
            },
            include: {
                plan: true,
            },
        });

        // create billing history (setelah upgrade)
        await prisma.billingHistory.create({
            data: {
                subscriptionId: newSubscription.id,
                invoiceNumber: `INV-UPGRADE-${Date.now()}`,
                planName: newPlan.name,
                amount: proratedAmount > 0 ? proratedAmount : newPrice,
                status: "PAID",
                paidAt: now,
                paymentMethod: "Upgrade",
            },
        });

        res.status(200).json({
            success: true,
            message: "Subscription upgraded successfully",
            data: {
                subscription: newSubscription,
                billing: {
                    previousPlan: currentSubscription.plan.name,
                    newPlan: newPlan.name,
                    proratedAmount: Math.max(0, proratedAmount),
                    unusedCredit: unusedAmount,
                },
            },
        });

    } catch (error) {
        console.error("Error upgrading subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to upgrade subscription",
        });
    }
}