import { Request, Response } from "express";
import prisma from "../../../utils/prisma";
import { AddPaymentMethodDTO } from "../../../types/billing.types";
import { PaymentType } from "../../../generated";

// add new payment method
export async function addPaymentMethod(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const {
      type,
      cardLastFour,
      cardBrand,
      walletProvider,
      walletPhone,
      isDefault = false,
    } = req.body as AddPaymentMethodDTO;

    // validasi tipe pembayaran harus valid
    if (!type || !Object.values(PaymentType).includes(type as PaymentType)) {
      return res.status(400).json({
        success: false,
        message: "Valid payment type is required",
      });
    }

    // validasi untuk tipe yang CREDIT_CARD
    if (type === PaymentType.CREDIT_CARD && (!cardLastFour || !cardBrand)) {
      return res.status(400).json({
        success: false,
        message: "Card last four digits and brand are required for credit card",
      });
    }

    // validasi untuk tipe yang E-WALLET
    if (type === PaymentType.EWALLET && (!walletProvider || !walletPhone)) {
      return res.status(400).json({
        success: false,
        message: "Wallet provider and phone are required for e-wallet",
      });
    }

    // jika payment method diset sebagai default, maka harus unset method lain
    if (isDefault) {
      await prisma.paymentMethod.updateMany({
        where: {
          userId,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    }

    // create payment method
    const paymentMethod = await prisma.paymentMethod.create({
      data: {
        userId,
        type: type as PaymentType,
        cardLastFour: cardLastFour || null,      // null ini jika bukan credit card
        cardBrand: cardBrand || null,            // null ini jika bukan credit card
        walletProvider: walletProvider || null,  // null ini jika bukan e-wallet
        walletPhone: walletPhone || null,        // null ini jika bukan e-wallet
        isDefault, 
        isActive: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Payment method added successfully",
      data: paymentMethod,
    });
    
  } catch (error) {
    console.error("Error adding payment method:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add payment method",
    });
  }
}