import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";

export async function checkOwner(req: Request, res: Response, next: NextFunction) {
    try {
        const organizationId = req.params.organizationId || req.body.organizationId;
        const userId = req.user?.id;

        if (!userId || !organizationId) {
            return res.status(400).json({
                success: false,
                message: "Missing Organization ID or User ID",
            });
        }

        // mengecek apakah user adalah owner
        const member = await prisma.organizationMember.findFirst({
            where: {
                organizationId: organizationId,
                userId: Number(userId),
                role: "OWNER",
                status: "ACTIVE",
            },
        });

        if (!member) {
            return res.status(403).json({
                success: false,
                message: "Access denied: Only owner can perform this action.",
            });
        }

        (req as any).member = member;
        next();

    } catch (error) {
        console.error("checOwner error:", error);
        return res.status(500).json({
            succcess: false,
            message: "Internal server error while checking owner role",
        });
    }
}