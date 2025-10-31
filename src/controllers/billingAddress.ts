import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  CreateBillingAddressDTO,
  UpdateBillingAddressDTO,
} from "../types/billingAddress.types";

// Get billing address (user's own)
export async function getBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const billingAddress = await prisma.billingAddress.findUnique({ where: { userId } });
    if (!billingAddress)
      return res.status(404).json({ success: false, message: "Billing address not found" });

    res.status(200).json({
      success: true,
      message: "Billing address retrieved successfully",
      data: billingAddress,
    });
  } catch (error) {
    console.error("Error getting billing address:", error);
    res.status(500).json({ success: false, message: "Failed to get billing address" });
  }
}

// Create billing address
export async function createBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const { fullName, email, country, city, state, zip, address, company } =
      req.body as CreateBillingAddressDTO;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    // Validasi field wajib
    if (!fullName || !email || !country || !city || !state || !zip || !address)
      return res.status(400).json({
        success: false,
        message: "All fields except company are required",
      });

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ success: false, message: "Invalid email format" });

    // Pastikan belum ada billing address
    const existing = await prisma.billingAddress.findUnique({ where: { userId } });
    if (existing)
      return res.status(400).json({
        success: false,
        message: "Billing address already exists. Use update instead.",
      });

    const billingAddress = await prisma.billingAddress.create({
      data: {
        userId,
        fullName: fullName.trim(),
        email: email.trim(),
        country: country.trim(),
        city: city.trim(),
        state: state.trim(),
        zip: zip.trim(),
        address: address.trim(),
        company: company?.trim(),
      },
    });

    res.status(201).json({
      success: true,
      message: "Billing address created successfully",
      data: billingAddress,
    });
  } catch (error) {
    console.error("Error creating billing address:", error);
    res.status(500).json({ success: false, message: "Failed to create billing address" });
  }
}

// Update billing address
export async function updateBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const updateData = req.body as UpdateBillingAddressDTO;

    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const existing = await prisma.billingAddress.findUnique({ where: { userId } });
    if (!existing)
      return res.status(404).json({
        success: false,
        message: "Billing address not found. Create one first.",
      });

    const billingAddress = await prisma.billingAddress.update({
      where: { userId },
      data: Object.fromEntries(
        Object.entries(updateData).map(([key, value]) => [key, value?.toString().trim()])
      ),
    });

    res.status(200).json({
      success: true,
      message: "Billing address updated successfully",
      data: billingAddress,
    });
  } catch (error) {
    console.error("Error updating billing address:", error);
    res.status(500).json({ success: false, message: "Failed to update billing address" });
  }
}

// Delete billing address
export async function deleteBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    if (!userId)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const billingAddress = await prisma.billingAddress.findUnique({ where: { userId } });
    if (!billingAddress)
      return res.status(404).json({ success: false, message: "Billing address not found" });

    await prisma.billingAddress.delete({ where: { userId } });

    res.status(200).json({
      success: true,
      message: "Billing address deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting billing address:", error);
    res.status(500).json({ success: false, message: "Failed to delete billing address" });
  }
}
