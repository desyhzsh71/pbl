import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { CreateSubscriptionDTO } from "../../types/subscription.types";
import { SubscriptionStatus } from "../../generated";

// create new subscription -> untuk checkout flow
export async function createSubscription(req: Request, res: Response) {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const { planId, organizationId, billingCycle, paymentMethodId, paymentChannel, autoRenew = true,
        } = req.body as CreateSubscriptionDTO;

        if (!planId) {
            return res.status(400).json({
                success: false,
                message: "Plan ID is required",
            });
        }

        // get detail plan
        const plan = await prisma.plan.findUnique({
            where: { id: planId },
        });

        if (!plan || !plan.isActive) {
            return res.status(404).json({
                success: false,
                message: "Plan not found or inactive",
            });
        }

        // mengecek billing address sudah ada atau tidak
        const billingAddress = await prisma.billingAddress.findUnique({
            where: { userId },
        });

        if (!billingAddress) {
            return res.status(400).json({
                success: false,
                message: "Please complete your billing address first",
            });
        }

        // jika organisasi mau subscription -> verifikasi apakah user ini owner atau tidak
        if (organizationId) {
            const orgMember = await prisma.organizationMember.findFirst({
                where: {
                    organizationId,
                    userId,
                    role: "OWNER", // cuma owner yang bisa subscribe untuk organisasi
                    status: "ACTIVE",
                },
            });

            if (!orgMember) {
                return res.status(403).json({
                    success: false,
                    message: "Only organization owner can create subscription",
                });
            }

            // mengecek apakah organisasi sudah punya subscription yang aktif atau tidak
            const existingOrgSub = await prisma.subscription.findFirst({
                where: {
                    organizationId,
                    status: { in: ["ACTIVE", "TRIAL", "PENDING"] },
                },
            });

            if (existingOrgSub) {
                return res.status(400).json({
                    success: false,
                    message: "Organization already has an active subscription",
                });
            }
        } else {
            // mengecek apakah user sudah punya personal subscription yang aktif
            const existingUserSub = await prisma.subscription.findFirst({
                where: {
                    userId,
                    organizationId: null,
                    status: { in: ["ACTIVE", "TRIAL", "PENDING"] },
                },
            });

            if (existingUserSub) {
                return res.status(400).json({
                    success: false,
                    message: "You already have an active subscription",
                });
            }
        }

        const startDate = new Date();
        const endDate = new Date();

        // use billingCycle dari request maupun default dari plan
        const cycle = billingCycle || plan.billingCycle;

        if (cycle === "MONTHLY") {
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (cycle === "YEARLY") {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        const nextPaymentDate = autoRenew ? endDate : null;

        // create subscription dengan status pending
        const subscription = await prisma.subscription.create({
            data: {
                userId: organizationId ? null : userId,
                organizationId: organizationId || null,
                planId,
                status: SubscriptionStatus.PENDING,
                startDate,
                endDate,
                autoRenew,
                nextPaymentDate,
            },
            include: {
                plan: true,
            },
        });

        // create payment transaction -> di production, ini bakal integrate dengan payment (Xendit/Midtrans)
        const amount = Number(plan.price);

        const transaction = await prisma.paymentTransaction.create({
            data: {
                subscriptionId: subscription.id,
                paymentGateway: paymentChannel || "XENDIT", // default
                transactionId: `TRX-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // contoh sementara
                amount,
                status: "PENDING",

                webhookData: {
                    paymentMethod: paymentChannel,
                    billingCycle: cycle,
                },
            },
        });

        // ini cuma contoh response palsu
        // harusnya ada generate payment url
        const checkoutResponse = {
            subscriptionId: subscription.id,
            transactionId: transaction.id,
            paymentUrl: `https://checkout.example.com/${transaction.id}`, // Mock URL
            amount,
            status: "PENDING",
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        };

        res.status(201).json({
            success: true,
            message: "Subscription created successfully. Please complete the payment.",
            data: checkoutResponse,
        });

    } catch (error) {
        console.error("Error creating subscription:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create subscription",
        });
    }
}