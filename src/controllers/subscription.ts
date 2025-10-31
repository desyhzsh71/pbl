import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { 
  SubscriptionStatus, PaymentStatus, BillingStatus, PlanStatus, Status } from "../generated";
import {
  SubscribePlanDTO,
  ChangePlanDTO,
  UpdateSubscriptionDTO,
  CancelSubscriptionDTO,
  SubscriptionQueryParams,
} from "../types/subscription.types";

// subscribe untuk plan (organisasi)
export async function subscribePlan(req: Request, res: Response) {
  try {
    const { organizationId, planId, autoRenewal = false } = req.body as SubscribePlanDTO;
    const userId = req.user?.id;

    if (!userId || !organizationId || !planId) {
      return res.status(400).json({
        success: false,
        message: "Organization ID and Plan ID are required",
      });
    }

    // mengecek apakah user adalah owner organization
    const organization = await prisma.organization.findFirst({
      where: { id: organizationId, ownerId: userId },
    });

    if (!organization) {
      return res.status(403).json({
        success: false,
        message: "Only organization owner can subscribe to a plan",
      });
    }

    // mengecek plan
    const plan = await prisma.plan.findUnique({ where: { id: planId } });

    if (!plan || plan.status !== PlanStatus.active) {
      return res.status(404).json({
        success: false,
        message: "Plan not found or not available",
      });
    }

    // mengecek apakah sudah ada subscription yang aktif
    const existingSubscription = await prisma.subscription.findFirst({
      where: { userId, status: SubscriptionStatus.active },
    });

    if (existingSubscription) {
      return res.status(400).json({
        success: false,
        message: "You already have an active subscription",
      });
    }

    // menghitung tanggal 30 hari dari sekarang
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    // Buat subscription
    const subscription = await prisma.subscription.create({
      data: {
        userId,
        planId,
        startDate,
        endDate,
        autoRenewal,
        status: SubscriptionStatus.active,
        paymentStatus: PaymentStatus.unpaid,
        totalPrice: plan.price,
      },
      include: { plan: true },
    });

    // create billing history
    await prisma.billingHistory.create({
      data: {
        userId,
        planId,
        datePaid: new Date(),
        nominal: plan.price,
        status: BillingStatus.active,
      },
    });

    res.status(201).json({
      success: true,
      message: "Successfully subscribed to plan",
      data: subscription,
    });
  } catch (error) {
    console.error("Error subscribing to plan:", error);
    res.status(500).json({ success: false, message: "Failed to subscribe to plan" });
  }
}

// get subscription by organization 
export async function getSubscriptionByOrganization(req: Request, res: Response) {
  try {
    const { organizationId } = req.params;
    const userId = req.user?.id;

    if (!userId || !organizationId) {
      return res.status(400).json({
        success: false,
        message: "Organization ID is required",
      });
    }

    // get organization owner
    const organization = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: { ownerId: true },
    });

    if (!organization) {
      return res.status(404).json({ success: false, message: "Organization not found" });
    }

    // get active subscription
    const subscription = await prisma.subscription.findFirst({
      where: { userId: organization.ownerId, status: SubscriptionStatus.active },
      include: { plan: true },
    });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: "No active subscription found",
      });
    }

    // menghitung hari yang tersisa
    const now = new Date();
    const endDate = new Date(subscription.endDate);
    const daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    res.status(200).json({
      success: true,
      message: "Subscription retrieved successfully",
      data: {
        ...subscription,
        daysRemaining,
        isExpiringSoon: daysRemaining <= 7,
      },
    });
  } catch (error) {
    console.error("Error getting subscription:", error);
    res.status(500).json({ success: false, message: "Failed to get subscription" });
  }
}

// update subscription (mengaktifkan perpanjangan)
export async function updateSubscription(req: Request, res: Response) {
  try {
    const { subscriptionId } = req.params;
    const { autoRenewal } = req.body as UpdateSubscriptionDTO;
    const userId = req.user?.id;

    if (!userId || !subscriptionId) {
      return res.status(400).json({
        success: false,
        message: "Subscription ID is required",
      });
    }

    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(subscriptionId) },
    });

    if (!subscription || subscription.userId !== userId) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    const updated = await prisma.subscription.update({
      where: { id: Number(subscriptionId) },
      data: { autoRenewal },
      include: { plan: true },
    });

    res.status(200).json({
      success: true,
      message: "Subscription updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ success: false, message: "Failed to update subscription" });
  }
}

// cancel subscription
export async function cancelSubscription(req: Request, res: Response) {
  try {
    const { subscriptionId } = req.params;
    const userId = req.user?.id;

    if (!userId || !subscriptionId) {
      return res.status(400).json({
        success: false,
        message: "Subscription ID is required",
      });
    }

    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(subscriptionId) },
    });

    if (!subscription || subscription.userId !== userId) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    if (subscription.status === SubscriptionStatus.cancelled) {
      return res.status(400).json({
        success: false,
        message: "Subscription is already cancelled",
      });
    }

    const cancelled = await prisma.subscription.update({
      where: { id: Number(subscriptionId) },
      data: {
        status: SubscriptionStatus.cancelled,
        autoRenewal: false,
      },
      include: { plan: true },
    });

    res.status(200).json({
      success: true,
      message: "Subscription cancelled successfully",
      data: cancelled,
    });
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    res.status(500).json({ success: false, message: "Failed to cancel subscription" });
  }
}

// upgrade plan
export async function upgradePlan(req: Request, res: Response) {
  try {
    const { subscriptionId } = req.params;
    const { newPlanId } = req.body;
    const userId = req.user?.id;

    if (!userId || !subscriptionId || !newPlanId) {
      return res.status(400).json({
        success: false,
        message: "Subscription ID and new Plan ID are required",
      });
    }

    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(subscriptionId) },
      include: { plan: true },
    });

    if (!subscription || subscription.userId !== userId) {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
      });
    }

    const newPlan = await prisma.plan.findUnique({ where: { id: newPlanId } });

    if (!newPlan || newPlan.status !== PlanStatus.active) {
      return res.status(404).json({
        success: false,
        message: "Plan not found or not available",
      });
    }

    // update subscription
    const updated = await prisma.subscription.update({
      where: { id: Number(subscriptionId) },
      data: {
        planId: newPlanId,
        totalPrice: newPlan.price,
        paymentStatus: PaymentStatus.unpaid,
      },
      include: { plan: true },
    });

    // create billing history
    await prisma.billingHistory.create({
      data: {
        userId,
        planId: newPlanId,
        datePaid: new Date(),
        nominal: newPlan.price,
        status: BillingStatus.active,
      },
    });

    res.status(200).json({
      success: true,
      message: "Plan upgraded successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error upgrading plan:", error);
    res.status(500).json({ success: false, message: "Failed to upgrade plan" });
  }
}