import { Request, Response } from "express";
import prisma from "../../../utils/prisma";

// get biliing address milik user
export async function getBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const billingAddress = await prisma.billingAddress.findUnique({
      where: { userId },
    });

    if (!billingAddress) {
      return res.status(404).json({
        success: false,
        message: "Billing address not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Billing address retrieved successfully",
      data: billingAddress,
    });
    
  } catch (error) {
    console.error("Error getting billing address:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get billing address",
    });
  }
}