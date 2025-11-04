import { Request, Response } from "express";
import prisma from "../../../utils/prisma";

// set payment method as default
export async function setDefaultPaymentMethod(req: Request, res: Response) {
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
        message: "You don't have permission to modify this payment method",
      });
    }

    if (!paymentMethod.isActive) {
      return res.status(400).json({
        success: false,
        message: "Cannot set inactive payment method as default",
      });
    }

    // unset semua payment method yang lain (default) milik uer
    await prisma.paymentMethod.updateMany({
      where: {
        userId,
        isDefault: true,
        id: { not: id },
      },
      data: {
        isDefault: false,
      },
    });

    // set payment method ini sebagai default
    const updatedPaymentMethod = await prisma.paymentMethod.update({
      where: { id },
      data: { isDefault: true },
    });

    res.status(200).json({
      success: true,
      message: "Default payment method set successfully",
      data: updatedPaymentMethod,
    });
    
  } catch (error) {
    console.error("Error setting default payment method:", error);
    res.status(500).json({
      success: false,
      message: "Failed to set default payment method",
    });
  }
}