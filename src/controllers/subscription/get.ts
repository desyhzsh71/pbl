import { Request, Response } from "express";
import prisma from "../../utils/prisma";

// get subscription yang sedang aktif -> ini untuk organisasi dan user dalam organisasi
export async function getCurrentSubscription(req: Request, res: Response) {
    try {
        const userId = req.user?.id;
        const { organizationId } = req.query;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const where: any = {
            status: { in: ["ACTIVE", "TRIAL"] },
        };

        if (organizationId) {
            // get subscription organisasi dan verifikasi user yang login ini adalah member dari organisasi
            const isMember = await prisma.organizationMember.findFirst({
                where: {
                    organizationId: organizationId as string,
                    userId,
                    status: "ACTIVE",
                },
            });

            if (!isMember) {
                return res.status(403).json({
                    success: false,
                    message: "You are not a member of this organization",
                });
            }

            where.organizationId = organizationId;
        } else {
            // Get personal subscription
            where.userId = userId;
        }

        const subscription = await prisma.subscription.findFirst({
            where,
            include: {
                plan: true, user: {
                    select: {
                        id: true, fullName: true, email: true
                    },
                },
                organization: organizationId ? {
                    select: { id: true, name: true },
                } : false,
            },
            orderBy: { createdAt: "desc" },
        });

        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: "No active subscription found",
                data: null,
            });
        }

        const now = new Date();
        const endDate = subscription.endDate ? new Date(subscription.endDate) : null;
        const daysRemaining = endDate
            ? Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
            : null;

        const response = {
            id: subscription.id,
            userId: subscription.userId,
            organizationId: subscription.organizationId,
            plan: {
                id: subscription.plan.id,
                name: subscription.plan.name,
                description: subscription.plan.description,
                price: Number(subscription.plan.price),
                billingCycle: subscription.plan.billingCycle,
                features: subscription.plan.features,
                limits: subscription.plan.limits,
            },
            status: subscription.status,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
            autoRenew: subscription.autoRenew,
            lastPaymentDate: subscription.lastPaymentDate,
            nextPaymentDate: subscription.nextPaymentDate,
            daysRemaining,
            createdAt: subscription.createdAt,
            updatedAt: subscription.updatedAt,
        };

        res.status(200).json({
            success: true,
            message: "Subscription retrieved successfully",
            data: response,
        });

    } catch (error) {
        console.error("Error getting subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get subscription",
        });
    }
}