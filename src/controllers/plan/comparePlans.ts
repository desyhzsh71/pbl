import { Request, Response } from "express";
import prisma from "../../utils/prisma";

/**
 * Compare multiple plans side by side
 * Optional: Untuk fitur comparison table
 * 
 * Query params:
 * - planIds: comma-separated plan IDs (e.g., "id1,id2,id3")
 * 
 * Jika tidak ada planIds, akan compare semua active plans
 */
export async function comparePlans(req: Request, res: Response) {
  try {
    const { planIds } = req.query;

    let plans;

    if (planIds && typeof planIds === "string") {
      // Compare specific plans
      const ids = planIds.split(",").map(id => id.trim());
      
      plans = await prisma.plan.findMany({
        where: {
          id: { in: ids },
          isActive: true,
        },
        orderBy: { price: "asc" },
      });

      if (plans.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No plans found with the provided IDs",
        });
      }
    } else {
      // Compare all active plans
      plans = await prisma.plan.findMany({
        where: { isActive: true },
        orderBy: { price: "asc" },
      });
    }

    // Extract all unique feature keys
    const allFeatureKeys = new Set<string>();
    const allLimitKeys = new Set<string>();

    plans.forEach(plan => {
      Object.keys(plan.features as object).forEach(key => allFeatureKeys.add(key));
      Object.keys(plan.limits as object).forEach(key => allLimitKeys.add(key));
    });

    // Build comparison matrix
    const comparison = {
      plans: plans.map(plan => ({
        id: plan.id,
        name: plan.name,
        description: plan.description,
        price: Number(plan.price),
        billingCycle: plan.billingCycle,
      })),
      features: Array.from(allFeatureKeys).map(featureKey => ({
        key: featureKey,
        label: formatLabel(featureKey),
        values: plans.map(plan => {
          const features = plan.features as any;
          return features[featureKey] || false;
        }),
      })),
      limits: Array.from(allLimitKeys).map(limitKey => ({
        key: limitKey,
        label: formatLabel(limitKey),
        values: plans.map(plan => {
          const limits = plan.limits as any;
          const value = limits[limitKey];
          // -1 berarti unlimited
          return value === -1 ? "Unlimited" : value;
        }),
      })),
    };

    res.status(200).json({
      success: true,
      message: "Plan comparison retrieved successfully",
      data: comparison,
    });
  } catch (error) {
    console.error("Error comparing plans:", error);
    res.status(500).json({
      success: false,
      message: "Failed to compare plans",
    });
  }
}

/**
 * Helper function untuk format key menjadi readable label
 * e.g., "apiCalls" -> "API Calls"
 */
function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
    .trim();
}