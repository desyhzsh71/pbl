import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { CreatePlanDTO } from "../../types/plan.types";

// create new plan
export async function createPlan(req: Request, res: Response) {
  try {
    const planData = req.body as CreatePlanDTO;

    // validasi required fields
    if (!planData.name || !planData.price || !planData.billingCycle) {
      return res.status(400).json({
        success: false,
        message: "Name, price, and billing cycle are required",
      });
    }

    // validasi price tidak negatif
    if (planData.price < 0) {
      return res.status(400).json({
        success: false,
        message: "Price cannot be negative",
      });
    }

    // mengecek apakah plan dengan nama yang sama, sudah ada atau tidak
    const existingPlan = await prisma.plan.findFirst({
      where: {
        name: planData.name,
        billingCycle: planData.billingCycle,
      },
    });

    if (existingPlan) {
      return res.status(400).json({
        success: false,
        message: `Plan with name '${planData.name}' and billing cycle '${planData.billingCycle}' already exists`,
      });
    }

    // create plan
    const plan = await prisma.plan.create({
      data: {
        name: planData.name,
        description: planData.description,
        price: planData.price,
        billingCycle: planData.billingCycle,
        features: (planData.features || []) as any,
        limits: (planData.limits || {}) as any,
        isActive: planData.isActive ?? true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: plan,
    });
  } catch (error) {
    console.error("Error creating plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create plan",
    });
  }
}