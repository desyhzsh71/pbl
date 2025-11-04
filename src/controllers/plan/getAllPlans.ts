import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { BillingCycle } from "../../generated";
import { PlanFilterQuery } from "../../types/plan.types";

// get all plans
export async function getAllPlans(req: Request, res: Response) {
  try {
    const { 
      billingCycle, 
      isActive = "true", // default -> hanya menampilkan plan yang aktif
      minPrice,
      maxPrice 
    } = req.query as unknown as PlanFilterQuery & { isActive?: string };

    const where: any = {
      isActive: isActive === "true",
    };

    if (billingCycle) {
      where.billingCycle = billingCycle;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) {
        where.price.gte = Number(minPrice);
      }
      if (maxPrice !== undefined) {
        where.price.lte = Number(maxPrice);
      }
    }

    // query untuk mengambil plan sesuai filer
    const plans = await prisma.plan.findMany({
      where,
      orderBy: [
        { price: "asc" }, // diurut berdasar harga dari terendah
      ],
    });

    // transform data agar dapat dikirim ke frontend
    const transformedPlans = plans.map((plan, index) => {
      let badge = undefined;
      let isRecommended = false;

      // menambahkan badge sesuai nama plann
      if (plan.name === "Professional") {
        badge = "MOST POPULAR";
        isRecommended = true;
      } else if (plan.name === "Enterprise") {
        badge = "BEST VALUE";
      } else if (plan.name === "White Label") {
        badge = "CONTACT US";
      }

      return {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        price: Number(plan.price),
        billingCycle: plan.billingCycle,
        features: plan.features,
        limits: plan.limits,
        isActive: plan.isActive,
        badge,
        isRecommended,
      };
    });

    res.status(200).json({
      success: true,
      message: "Plans retrieved successfully",
      data: transformedPlans,
      meta: {
        total: transformedPlans.length,
        filters: {
          billingCycle: billingCycle || "all",
          isActive: isActive === "true",
        },
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