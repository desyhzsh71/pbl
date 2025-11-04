import { Request, Response } from "express";
import prisma from "../../../utils/prisma";

// get all payment methods
export async function getPaymentMethods(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const paymentMethods = await prisma.paymentMethod.findMany({
      where: { userId },
      orderBy: [
        { isDefault: "desc" },
        { createdAt: "desc" },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Payment methods retrieved successfully",
      data: paymentMethods,
      meta: {
        total: paymentMethods.length,
        hasDefault: paymentMethods.some(pm => pm.isDefault),
      },
    });
  } catch (error) {
    console.error("Error getting payment methods:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get payment methods",
    });
  }
}