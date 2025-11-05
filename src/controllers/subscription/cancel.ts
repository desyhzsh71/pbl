import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { CancelSubscriptionDTO } from "../../types/subscription.types";

// cancel subscription
export async function cancelSubscription(req: Request, res: Response) {
    try {
        const userId = req.user?.id;
        const { organizationId } = req.query;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const { reason, cancelImmediately = false } = req.body as CancelSubscriptionDTO;

        const where: any = {
            status: { in: ["ACTIVE", "TRIAL"] },
        };

        if (organizationId) {
            // verifikasi user merupakan owner
            const orgMember = await prisma.organizationMember.findFirst({
                where: {
                    organizationId: organizationId as string,
                    userId,
                    role: "OWNER",
                    status: "ACTIVE",
                },
            });

            if (!orgMember) {
                return res.status(403).json({
                    success: false,
                    message: "Only organization owner can cancel subscription",
                });
            }

            where.organizationId = organizationId;
        } else {
            where.userId = userId;
            where.organizationId = null;
        }

        const subscription = await prisma.subscription.findFirst({
            where,
            include: {
                plan: true,
            },
        });

        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "No active subscription found",
            });
        }

        const now = new Date();
        let newStatus = subscription.status;
        let newEndDate = subscription.endDate;

        if (cancelImmediately) {
            newStatus = "CANCELLED";
            newEndDate = now;
        } else {
            newStatus = subscription.status;
        }

        // update subscription
        const updatedSubscription = await prisma.subscription.update({
            where: { id: subscription.id },
            data: {
                status: newStatus,
                endDate: newEndDate,
                autoRenew: false,
                nextPaymentDate: null,
            },
            include: {
                plan: true,
            },
        });

        const message = cancelImmediately
            ? "Subscription cancelled immediately"
            : "Subscription will be cancelled at the end of the billing period";

        res.status(200).json({
            success: true,
            message,
            data: {
                subscription: updatedSubscription,
                cancelledAt: now,
                accessUntil: cancelImmediately ? now : subscription.endDate,
            },
        });

    } catch (error) {
        console.error("Error cancelling subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to cancel subscription",
        });
    }
}