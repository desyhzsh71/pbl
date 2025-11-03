import { Request, Response } from "express";
import prisma from "../../utils/prisma";

// delete plan
export async function deletePlan(req: Request, res: Response) {
  try {
    const { planId } = req.params;

    if (!planId) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    // mengecek apakah plan ada atau tidak
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

    // mengecek apakah ada subscription yang menggunakan plan
    if (plan._count.subscriptions > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete plan. There are ${plan._count.subscriptions} active subscription(s) using this plan. Consider deactivating it instead.`,
      });
    }

    // delete plan
    await prisma.plan.delete({
      where: { id: planId },
    });

    res.status(200).json({
      success: true,
      message: "Plan deleted successfully",
      data: {
        id: plan.id,
        name: plan.name,
      },
    });
  } catch (error) {
    console.error("Error deleting plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete plan",
    });
  }
}