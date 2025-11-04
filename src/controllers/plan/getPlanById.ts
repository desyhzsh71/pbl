import { Request, Response } from "express";
import prisma from "../../utils/prisma";

// get plan by id
export async function getPlanById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    const plan = await prisma.plan.findUnique({
      where: { id },
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    const transformedPlan = {
      id: plan.id,
      name: plan.name,
      description: plan.description,
      price: Number(plan.price),
      billingCycle: plan.billingCycle,
      features: plan.features,
      limits: plan.limits,
      isActive: plan.isActive,
    };

    res.status(200).json({
      success: true,
      message: "Plan retrieved successfully",
      data: transformedPlan,
    });
  } catch (error) {
    console.error("Error getting plan by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get plan",
    });
  }
}