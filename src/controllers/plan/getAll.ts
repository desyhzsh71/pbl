import { Request, Response } from "express";
import prisma from "../../utils/prisma";

// get all plans -> untuk halaman pricing
export async function getAllPlans(req: Request, res: Response) {
  try {
    const { active, billingCycle } = req.query;

    // build filter
    const where: any = {};
    
    if (active !== undefined) {
      where.isActive = active === "true";
    }
    
    if (billingCycle) {
      where.billingCycle = billingCycle;
    }

    // get plans
    const plans = await prisma.plan.findMany({
      where,
      orderBy: [
        { price: "asc" },
        { createdAt: "desc" }
      ],
    });

    // grouping plans berdasarkan billing cycle
    const groupedPlans = {
      monthly: plans.filter(p => p.billingCycle === "MONTHLY"),
      yearly: plans.filter(p => p.billingCycle === "YEARLY"),
    };

    res.status(200).json({
      success: true,
      message: "Plans retrieved successfully",
      data: plans,
      grouped: groupedPlans,
      stats: {
        total: plans.length,
        active: plans.filter(p => p.isActive).length,
        inactive: plans.filter(p => !p.isActive).length,
        monthly: groupedPlans.monthly.length,
        yearly: groupedPlans.yearly.length,
      },
    });
  } catch (error) {
    console.error("Error getting plans:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get plans",
    });
  }
}