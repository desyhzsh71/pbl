import { Request, Response } from "express";
import prisma from "../../../utils/prisma";

// delete payment method
export async function deletePaymentMethod(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Payment method ID is required",
      });
    }

    // mengecek apakah payment method ada dan milik user
    const paymentMethod = await prisma.paymentMethod.findUnique({
      where: { id },
    });

    if (!paymentMethod) {
      return res.status(404).json({
        success: false,
        message: "Payment method not found",
      });
    }

    if (paymentMethod.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to delete this payment method",
      });
    }

    // mengecek apakah ada subscription aktif yang menggunakan payment method ini
    const activeSubscription = await prisma.subscription.findFirst({
      where: {
        userId,
        status: { in: ["ACTIVE", "TRIAL"] },
      },
    });

    if (activeSubscription && paymentMethod.isDefault) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete default payment method while you have an active subscription. Please set another payment method as default first.",
      });
    }

    // delete payment method
    await prisma.paymentMethod.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: "Payment method deleted successfully",
    });
    
  } catch (error) {
    console.error("Error deleting payment method:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete payment method",
    });
  }
}