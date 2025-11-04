import { Request, Response } from "express";
import prisma from "../../../utils/prisma";
import { UpdatePaymentMethodDTO } from "../../../types/billing.types";

// update payment method
export async function updatePaymentMethod(req: Request, res: Response) {
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

    const { isDefault, isActive } = req.body as UpdatePaymentMethodDTO;

    // mengecek apakah payment method ada dan milik user
    const existingPaymentMethod = await prisma.paymentMethod.findUnique({
      where: { id },
    });

    if (!existingPaymentMethod) {
      return res.status(404).json({
        success: false,
        message: "Payment method not found",
      });
    }

    if (existingPaymentMethod.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to update this payment method",
      });
    }

    if (isDefault === true) {
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
    }

    // update payment method
    const updatedPaymentMethod = await prisma.paymentMethod.update({
      where: { id },
      data: {
        ...(isDefault !== undefined && { isDefault }),
        ...(isActive !== undefined && { isActive }),
      },
    });

    res.status(200).json({
      success: true,
      message: "Payment method updated successfully",
      data: updatedPaymentMethod,
    });
    
  } catch (error) {
    console.error("Error updating payment method:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update payment method",
    });
  }
}