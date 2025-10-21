import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  CreateOrganizationDTO,
  UpdateOrganizationDTO,
  OrganizationQueryParams
} from "../types/organization.types";
import { Role, Status } from "../generated";

// CREATE Organization - User otomatis jadi OWNER
export async function createOrganization(req: Request, res: Response) {
  try {
    const { name } = req.body as CreateOrganizationDTO;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Organization name is required" });
    }

    // Cek apakah user ada
    const user = await prisma.user.findUnique({ 
      where: { id: userId } 
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Buat organization dengan user sebagai owner
    const organization = await prisma.organization.create({
      data: {
        name: name.trim(),
        ownerId: userId,
        members: {
          create: {
            userId,
            role: Role.OWNER,
            status: Status.ACTIVE,
            joinedAt: new Date()
          }
        }
      },
      include: {
        owner: {
          select: { 
            id: true, 
            fullName: true, 
            email: true 
          }
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                company: true,
                job: true
              }
            }
          }
        },
        _count: {
          select: { 
            members: true, 
            projects: true 
          }
        }
      }
    });

    res.status(201).json({
      message: "Organization created successfully",
      data: organization
    });

  } catch (error) {
    console.error("Error creating organization:", error);
    res.status(500).json({ message: "Failed to create organization" });
  }
}

// GET All Organizations (user's organizations)
export async function getOrganizations(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const {
      search,
      page = 1,
      limit = 10,
      sortBy = "name", // Ganti ke "name" karena createdAt tidak ada
      sortOrder = "asc"
    } = req.query as OrganizationQueryParams;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const skip = (Number(page) - 1) * Number(limit);

    // Ambil semua org dimana user adalah active member
    const where: any = {
      members: {
        some: {
          userId,
          status: Status.ACTIVE
        }
      }
    };

    if (search) {
      where.name = { 
        contains: search, 
        mode: "insensitive" 
      };
    }

    const [organizations, total] = await Promise.all([
      prisma.organization.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { [sortBy]: sortOrder },
        include: {
          owner: {
            select: { 
              id: true, 
              fullName: true, 
              email: true 
            }
          },
          members: {
            where: { status: Status.ACTIVE },
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  email: true,
                  company: true,
                  job: true
                }
              }
            }
          },
          projects: {
            select: { 
              id: true, 
              name: true, 
              status: true 
            }
          },
          _count: {
            select: { 
              members: true, 
              projects: true 
            }
          }
        }
      }),
      prisma.organization.count({ where })
    ]);

    // Tambahkan stats untuk setiap organization
    const organizationsWithStats = organizations.map((org) => {
      // Cek apakah user adalah owner
      const userMember = org.members.find(m => m.userId === userId);
      const isOwner = org.ownerId === userId;

      return {
        ...org,
        userRole: userMember?.role || null,
        isOwner,
        stats: {
          totalMembers: org._count.members,
          totalProjects: org._count.projects,
          activeMembers: org.members.filter(
            m => m.status === Status.ACTIVE
          ).length,
          collaborators: org.members.filter(
            m => m.role === Role.COLLABORATOR && m.status === Status.ACTIVE
          ).length
        }
      };
    });

    res.status(200).json({
      data: organizationsWithStats,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit))
      }
    });

  } catch (error) {
    console.error("Error getting organizations:", error);
    res.status(500).json({ message: "Failed to get organizations" });
  }
}

// GET Organization by ID
export async function getOrganizationById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Ambil org hanya jika user adalah active member
    const organization = await prisma.organization.findFirst({
      where: {
        id,
        members: {
          some: {
            userId,
            status: Status.ACTIVE
          }
        }
      },
      include: {
        owner: {
          select: { 
            id: true, 
            fullName: true, 
            email: true 
          }
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                company: true,
                job: true
              }
            }
          },
          orderBy: { joinedAt: "desc" }
        },
        projects: {
          select: {
            id: true,
            name: true,
            status: true,
            createdAt: true,
            updatedAt: true
          }
        },
        _count: {
          select: { 
            members: true, 
            projects: true 
          }
        }
      }
    });

    if (!organization) {
      return res.status(404).json({ 
        message: "Organization not found or access denied" 
      });
    }

    // Ambil role user di organization ini
    const userMember = organization.members.find(m => m.userId === userId);
    const isOwner = organization.ownerId === userId;

    const stats = {
      totalMembers: organization._count.members,
      totalProjects: organization._count.projects,
      activeMembers: organization.members.filter(
        m => m.status === Status.ACTIVE
      ).length,
      collaborators: organization.members.filter(
        m => m.status === Status.ACTIVE && m.role === Role.COLLABORATOR
      ).length,
      pendingInvites: organization.members.filter(
        m => m.status === Status.PENDING
      ).length
    };

    res.status(200).json({
      data: {
        ...organization,
        userRole: userMember?.role || null,
        isOwner,
        stats
      }
    });

  } catch (error) {
    console.error("Error getting organization:", error);
    res.status(500).json({ message: "Failed to get organization" });
  }
}

// UPDATE Organization - hanya OWNER
export async function updateOrganization(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name } = req.body as UpdateOrganizationDTO;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Cek apakah user adalah owner
    const organization = await prisma.organization.findFirst({
      where: { 
        id, 
        ownerId: userId 
      }
    });

    if (!organization) {
      return res.status(403).json({ 
        message: "Only organization owner can update organization" 
      });
    }

    // Update organization
    const updated = await prisma.organization.update({
      where: { id },
      data: { 
        ...(name && { name: name.trim() }) 
      },
      include: {
        owner: {
          select: { 
            id: true, 
            fullName: true, 
            email: true 
          }
        },
        members: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                company: true,
                job: true
              }
            }
          }
        },
        _count: {
          select: { 
            members: true, 
            projects: true 
          }
        }
      }
    });

    res.status(200).json({
      message: "Organization updated successfully",
      data: updated
    });

  } catch (error) {
    console.error("Error updating organization:", error);
    res.status(500).json({ message: "Failed to update organization" });
  }
}

// DELETE Organization - hanya OWNER
export async function deleteOrganization(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Cek apakah user adalah owner
    const organization = await prisma.organization.findFirst({
      where: { 
        id, 
        ownerId: userId 
      },
      include: {
        _count: {
          select: {
            projects: true,
            members: true
          }
        }
      }
    });

    if (!organization) {
      return res.status(403).json({ 
        message: "Only organization owner can delete organization" 
      });
    }

    // Optional: cek apakah masih ada project aktif
    if (organization._count.projects > 0) {
      return res.status(400).json({ 
        message: "Cannot delete organization with active projects. Delete all projects first." 
      });
    }

    // Hapus organization (cascade akan hapus members juga)
    await prisma.organization.delete({ 
      where: { id } 
    });

    res.status(200).json({
      message: "Organization deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting organization:", error);
    res.status(500).json({ message: "Failed to delete organization" });
  }
}