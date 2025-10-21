import { Request, Response, NextFunction } from "express";
import prisma from "../utils/prisma";
import { Role, Status } from "../generated";

// Middleware: Cek apakah user adalah OWNER
export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    
    // Ambil organizationId dari params ATAU body (untuk POST request)
    const organizationId = req.params.id || 
                          req.params.organizationId || 
                          req.body.organizationId;

    if (!organizationId || !userId) {
      return res.status(400).json({ 
        message: "Organization ID and user required" 
      });
    }

    // Cek apakah user adalah owner
    const organization = await prisma.organization.findFirst({
      where: { 
        id: organizationId, 
        ownerId: userId 
      }
    });

    if (!organization) {
      return res.status(403).json({ 
        message: "Only organization owner can perform this action" 
      });
    }

    // Simpan data org ke request untuk digunakan di controller
    (req as any).organization = organization;
    next();

  } catch (error) {
    console.error("Owner check failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Middleware: Cek apakah user adalah ACTIVE member
export const isActiveMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    
    // Ambil organizationId dari params atau body
    const organizationId = req.params.id || 
                          req.params.organizationId || 
                          req.body.organizationId;

    if (!organizationId || !userId) {
      return res.status(400).json({ 
        message: "Organization ID and user required" 
      });
    }

    // Cek apakah user adalah active member
    const member = await prisma.organizationMember.findFirst({
      where: { 
        organizationId, 
        userId, 
        status: Status.ACTIVE 
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
            ownerId: true
          }
        }
      }
    });

    if (!member) {
      return res.status(403).json({ 
        message: "Only active members can access this resource" 
      });
    }

    // Simpan data member & org ke request
    (req as any).member = member;
    (req as any).isOwner = member.organization.ownerId === userId;
    next();

  } catch (error) {
    console.error("Member check failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Middleware: Cek apakah user punya role tertentu
export const hasRole = (allowedRoles: Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;
      
      const organizationId = req.params.id || 
                            req.params.organizationId || 
                            req.body.organizationId;

      if (!organizationId || !userId) {
        return res.status(400).json({ 
          message: "Organization ID and user required" 
        });
      }

      // Cek role user
      const member = await prisma.organizationMember.findFirst({
        where: { 
          organizationId, 
          userId, 
          status: Status.ACTIVE,
          role: { in: allowedRoles }
        }
      });

      if (!member) {
        return res.status(403).json({ 
          message: `Access denied. Required roles: ${allowedRoles.join(", ")}` 
        });
      }

      (req as any).member = member;
      next();

    } catch (error) {
      console.error("Role check failed:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
};