import { Request, Response } from "express";
import prisma from "../../utils/prisma";

// get plan by ID
export async function getPlanById(req: Request, res: Response) {
  try {
    const { planId } = req.params;

    if (!planId) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    const plan = await prisma.plan.findUnique({
      where: { id: planId },
      include: {
        _count: {
          select: {
            subscriptions: true,
          },
        },
      },
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Plan retrieved successfully",
      data: plan,
    });
  } catch (error) {
    console.error("Error getting plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get plan",
    });
  }
}