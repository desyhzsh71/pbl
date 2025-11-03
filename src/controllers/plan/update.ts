import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { UpdatePlanDTO } from "../../types/plan.types";

// update plan
export async function updatePlan(req: Request, res: Response) {
  try {
    const { planId } = req.params;
    const updateData = req.body as UpdatePlanDTO;

    if (!planId) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    // mengecek apakah plan ada
    const existingPlan = await prisma.plan.findUnique({
      where: { id: planId },
    });

    if (!existingPlan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // validasi price (jika update)
    if (updateData.price !== undefined && updateData.price < 0) {
      return res.status(400).json({
        success: false,
        message: "Price cannot be negative",
      });
    }

    // mengecek duplikasi nama jika 'name' atau 'billingCycle' diupdate
    if (updateData.name || updateData.billingCycle) {
      const duplicatePlan = await prisma.plan.findFirst({
        where: {
          id: { not: planId },
          name: updateData.name || existingPlan.name,
          billingCycle: updateData.billingCycle || existingPlan.billingCycle,
        },
      });

      if (duplicatePlan) {
        return res.status(400).json({
          success: false,
          message: "Plan with this name and billing cycle already exists",
        });
      }
    }

    // update plan
    const updatedPlan = await prisma.plan.update({
      where: { id: planId },
      data: {
        ...(updateData.name && { name: updateData.name }),
        ...(updateData.price !== undefined && { price: updateData.price }),
        ...(updateData.billingCycle && { billingCycle: updateData.billingCycle }),
        ...(updateData.features && { features: updateData.features as any }),
        ...(updateData.limits && { limits: updateData.limits as any }),
        ...(updateData.isActive !== undefined && { isActive: updateData.isActive }),
      },
    });

    res.status(200).json({
      success: true,
      message: "Plan updated successfully",
      data: updatedPlan,
    });
  } catch (error) {
    console.error("Error updating plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update plan",
    });
  }
}