import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";
import { Status } from "../generated";

export async function checkMemberzRole(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = req.user?.id;
        const organizationId = req.params.organizationId || req.body.organizationId;

        if (!userId || !organizationId) {
            return res.status(400).json({
                success: false,
                message: "Missing Organization ID or User ID",
            });
        }

        const member = await prisma.organizationMember.findFirst({
            where: {
                organizationId: organizationId,
                userId: Number(userId),
                status: "ACTIVE",
            },
        });

        if (!member) {
            return res.status(403).json({
                success: false,
                message: "You are not a member of this organization or your access is inactive.",
            });
        }

        (req as any).member = member;
        next();
    } catch (error) {
        console.error("checkMemberRole error:", error);
        return res.status(500).json({
            success: false, 
            message: "Internal server error while checking member role",
        });
    }
}