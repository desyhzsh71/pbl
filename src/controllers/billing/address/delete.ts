import { Request, Response } from "express";
import prisma from "../../../utils/prisma";

// delete billing address
export async function deleteBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // mengecek apakah billing address ada atau tidak
    const existingAddress = await prisma.billingAddress.findUnique({
      where: { userId },
    });

    if (!existingAddress) {
      return res.status(404).json({
        success: false,
        message: "Billing address not found",
      });
    }

    // mengecek apakah user punya subscription yang aktif atau tidak
    const activeSubscription = await prisma.subscription.findFirst({
      where: {
        userId,
        status: { in: ["ACTIVE", "TRIAL"] },
      },
    });

    if (activeSubscription) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete billing address while you have an active subscription",
      });
    }

    // delete billing address
    await prisma.billingAddress.delete({
      where: { userId },
    });

    res.status(200).json({
      success: true,
      message: "Billing address deleted successfully",
    });
    
  } catch (error) {
    console.error("Error deleting billing address:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete billing address",
    });
  }
}