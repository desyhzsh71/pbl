import { Request, Response } from "express";
import prisma from "../../../utils/prisma";
import { CreateBillingAddressDTO } from "../../../types/billing.types";

// create billing addresss
export async function createBillingAddress(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { fullName, email, country, city, zipCode, state, address, company,
        } = req.body as CreateBillingAddressDTO;

    if (!fullName || !email || !country || !city || !state || !address) {
      return res.status(400).json({
        success: false,
        message: "Full name, email, country, city, state, and address are required",
      });
    }

    // mengecek apakah user sudah punya billing address atau belum
    const existingAddress = await prisma.billingAddress.findUnique({
      where: { userId },
    });

    // jika sudah ada -> muncul error, karena seharusnya melakukan 'update'
    if (existingAddress) {
      return res.status(400).json({
        success: false,
        message: "Billing address already exists. Use update instead.",
      });
    }

    // create billing address
    const billingAddress = await prisma.billingAddress.create({
      data: {
        userId,
        fullName,
        email,
        country,
        city,
        zipCode: zipCode || null, // karena optional, pemisalan di sini memakai set null jika tidak mengisi
        state,
        address,
        company: company || null, // karena optional, pemisalan di sini memakai set null jika tidak mengisi
      },
    });

    res.status(201).json({
      success: true,
      message: "Billing address created successfully",
      data: billingAddress,
    });
    
  } catch (error) {
    console.error("Error creating billing address:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create billing address",
    });
  }
}