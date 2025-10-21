import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { Role, Status } from '../generated';

// ADD Collaborator - hanya OWNER yang bisa
export const addCollaborator = async (req: Request, res: Response) => {
  try {
    const { organizationId, email } = req.body;
    const currentUserId = req.user?.id;

    // Validasi input
    if (!organizationId || !email) {
      return res.status(400).json({ 
        message: "Organization ID and email are required" 
      });
    }

    if (!currentUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Middleware isOwner sudah validasi ownership, tapi double check untuk safety
    const organization = await prisma.organization.findFirst({
      where: { 
        id: organizationId, 
        ownerId: currentUserId 
      },
    });

    if (!organization) {
      return res.status(403).json({ 
        message: "Only organization owner can add collaborators" 
      });
    }

    // Cek apakah user dengan email tersebut ada
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        fullName: true,
        email: true,
        company: true,
        job: true
      }
    });

    if (!user) {
      return res.status(404).json({ 
        message: "User with that email not found" 
      });
    }

    // Tidak bisa invite diri sendiri
    if (user.id === currentUserId) {
      return res.status(400).json({ 
        message: "You cannot invite yourself" 
      });
    }

    // Cek apakah user sudah jadi member atau sudah diundang
    const existing = await prisma.organizationMember.findFirst({
      where: {
        organizationId,
        userId: user.id,
      },
    });

    if (existing) {
      if (existing.status === Status.PENDING) {
        return res.status(400).json({ 
          message: "User already has a pending invitation" 
        });
      }
      if (existing.status === Status.ACTIVE) {
        return res.status(400).json({ 
          message: "User is already a member of this organization" 
        });
      }
      if (existing.status === Status.INACTIVE) {
        return res.status(400).json({ 
          message: "User was previously a member. Contact admin to reactivate." 
        });
      }
    }

    // Tambahkan sebagai collaborator dengan status PENDING
    const collaborator = await prisma.organizationMember.create({
      data: {
        organizationId,
        userId: user.id,
        role: Role.COLLABORATOR,
        status: Status.PENDING,
        joinedAt: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            company: true,
            job: true,
          },
        },
        organization: {
          select: {
            id: true,
            name: true
          }
        }
      },
    });

    res.status(201).json({
      message: "Collaborator invited successfully",
      data: collaborator,
    });

  } catch (error) {
    console.error("Error adding collaborator:", error);
    res.status(500).json({ message: "Failed to add collaborator" });
  }
}

// GET Collaborators dari organization - semua active member bisa lihat
export async function getCollaborators(req: Request, res: Response) {
  try {
    const { organizationId } = req.params;
    const userId = req.user?.id;

    if (!organizationId) {
      return res.status(400).json({ 
        message: "Organization ID is required" 
      });
    }

    // Cek apakah user adalah anggota aktif
    const member = await prisma.organizationMember.findFirst({
      where: { 
        organizationId, 
        userId, 
        status: Status.ACTIVE 
      }
    });

    if (!member) {
      return res.status(403).json({ 
        message: "Only active members can view collaborators" 
      });
    }

    // Ambil semua member (termasuk owner dan pending)
    const members = await prisma.organizationMember.findMany({
      where: { organizationId },
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
      orderBy: [
        { role: "asc" }, // OWNER dulu
        { joinedAt: "desc" }
      ]
    });

    // Group by status
    const activeMembers = members.filter(m => m.status === Status.ACTIVE);
    const pendingInvites = members.filter(m => m.status === Status.PENDING);
    const inactiveMembers = members.filter(m => m.status === Status.INACTIVE);

    res.status(200).json({
      message: "Collaborators retrieved successfully",
      data: {
        all: members,
        active: activeMembers,
        pending: pendingInvites,
        inactive: inactiveMembers
      },
      stats: {
        total: members.length,
        active: activeMembers.length,
        pending: pendingInvites.length,
        inactive: inactiveMembers.length
      }
    });

  } catch (error) {
    console.error("Error getting collaborators:", error);
    res.status(500).json({ message: "Failed to get collaborators" });
  }
}

// GET User's Invitations - ambil semua undangan untuk user yang login
export async function getUserInvitations(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Ambil semua undangan PENDING untuk user ini
    const invitations = await prisma.organizationMember.findMany({
      where: {
        userId,
        status: Status.PENDING
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            owner: {
              select: {
                id: true,
                fullName: true,
                email: true
              }
            },
            _count: {
              select: {
                members: true,
                projects: true
              }
            }
          }
        }
      },
      orderBy: {
        joinedAt: "desc"
      }
    });

    res.status(200).json({
      message: "Invitations retrieved successfully",
      data: invitations,
      count: invitations.length
    });

  } catch (error) {
    console.error("Error getting user invitations:", error);
    res.status(500).json({ message: "Failed to get invitations" });
  }
}

// ACCEPT or REJECT Invitation - user yang diundang
export async function respondToInvitation(req: Request, res: Response) {
  try {
    const { memberId } = req.params;
    const { action } = req.body as { action: 'accept' | 'reject' };
    const userId = req.user?.id;

    if (!memberId || !action) {
      return res.status(400).json({ 
        message: "Member ID and action are required" 
      });
    }

    if (action !== 'accept' && action !== 'reject') {
      return res.status(400).json({ 
        message: "Invalid action. Use 'accept' or 'reject'" 
      });
    }

    // Cek apakah invitation ini milik user yang login
    const member = await prisma.organizationMember.findFirst({
      where: { 
        id: memberId, 
        userId,
        status: Status.PENDING
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    if (!member) {
      return res.status(404).json({ 
        message: "Invitation not found or already processed" 
      });
    }

    // Update status berdasarkan action
    const newStatus = action === 'accept' ? Status.ACTIVE : Status.INACTIVE;
    
    const updatedMember = await prisma.organizationMember.update({
      where: { id: memberId },
      data: { status: newStatus },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true
          }
        },
        organization: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    const message = action === 'accept' 
      ? "Invitation accepted successfully" 
      : "Invitation rejected";
    
    res.status(200).json({
      message,
      data: updatedMember
    });

  } catch (error) {
    console.error("Error responding to invitation:", error);
    res.status(500).json({ message: "Failed to respond to invitation" });
  }
}

// UPDATE Collaborator Role - hanya OWNER (misal upgrade collaborator jadi admin)
export async function updateCollaboratorRole(req: Request, res: Response) {
  try {
    const { memberId } = req.params;
    const { role } = req.body as { role: Role };
    const userId = req.user?.id;

    if (!memberId || !role) {
      return res.status(400).json({ 
        message: "Member ID and role are required" 
      });
    }

    // Tidak bisa set role OWNER
    if (role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot assign OWNER role. Transfer ownership instead." 
      });
    }

    // Ambil data member
    const member = await prisma.organizationMember.findUnique({
      where: { id: memberId },
      include: { organization: true }
    });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // Cek apakah user adalah owner
    if (member.organization.ownerId !== userId) {
      return res.status(403).json({ 
        message: "Only organization owner can update member roles" 
      });
    }

    // Tidak bisa update role owner
    if (member.role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot change owner's role" 
      });
    }

    // Update role
    const updated = await prisma.organizationMember.update({
      where: { id: memberId },
      data: { role },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true
          }
        }
      }
    });

    res.status(200).json({
      message: "Member role updated successfully",
      data: updated
    });

  } catch (error) {
    console.error("Error updating member role:", error);
    res.status(500).json({ message: "Failed to update member role" });
  }
}

// DELETE Collaborator - hanya OWNER
export async function deleteCollaborator(req: Request, res: Response) {
  try {
    const { memberId } = req.params;
    const userId = req.user?.id;

    if (!memberId) {
      return res.status(400).json({ 
        message: "Member ID is required" 
      });
    }

    // Ambil data member
    const member = await prisma.organizationMember.findUnique({
      where: { id: memberId },
      include: { 
        organization: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true
          }
        }
      }
    });

    if (!member) {
      return res.status(404).json({ 
        message: "Member not found" 
      });
    }

    // Cek apakah user adalah owner
    if (member.organization.ownerId !== userId) {
      return res.status(403).json({ 
        message: "Only organization owner can remove members" 
      });
    }

    // Tidak bisa hapus diri sendiri (owner)
    if (member.userId === userId) {
      return res.status(400).json({ 
        message: "Owner cannot remove themselves. Transfer ownership or delete organization instead." 
      });
    }

    // Tidak bisa hapus owner lain (just in case)
    if (member.role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot remove organization owner" 
      });
    }

    // Hapus member
    await prisma.organizationMember.delete({ 
      where: { id: memberId } 
    });

    res.status(200).json({
      message: "Member removed successfully",
      data: {
        removedMember: member.user,
        organization: {
          id: member.organization.id,
          name: member.organization.name
        }
      }
    });

  } catch (error) {
    console.error("Error deleting collaborator:", error);
    res.status(500).json({ message: "Failed to delete collaborator" });
  }
}