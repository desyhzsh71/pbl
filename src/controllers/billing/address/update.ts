import { Request, Response } from "express";
import prisma from "../../../utils/prisma";
import { UpdateBillingAddressDTO } from "../../../types/billing.types";

// update billing addresss
export async function updateBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const updateData = req.body as UpdateBillingAddressDTO;

    // mengecek apakah billing address ada atau tidak
    const existingAddress = await prisma.billingAddress.findUnique({
      where: { userId },
    });

    if (!existingAddress) {
      return res.status(404).json({
        success: false,
        message: "Billing address not found. Please create one first.",
      });
    }

    // hanya field yang ada nilainya, yang bakal diupdate
    const filteredData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== undefined)
    );

    // validasi apakah ada atau tidak data yang akan diupdate
    if (Object.keys(filteredData).length === 0) {
      return res.status(400).json({
        success: false,
        message: "No fields to update",
      });
    }

    // update billing address
    const updatedAddress = await prisma.billingAddress.update({
      where: { userId },
      data: filteredData,
    });

    res.status(200).json({
      success: true,
      message: "Billing address updated successfully",
      data: updatedAddress,
    });
    
  } catch (error) {
    console.error("Error updating billing address:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update billing address",
    });
  }
}