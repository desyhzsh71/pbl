import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { Role, Status } from '../generated';

// menambahkan collaborator - hanya OWNER yang bisa
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

    // mengecek apakah user dengan email tersebut ada
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

    // tidak bisa invite diri sendiri
    if (user.id === currentUserId) {
      return res.status(400).json({ 
        message: "You cannot invite yourself" 
      });
    }

    // mengecek apakah user sudah menjadi member atau sudah diundang
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

    // menambahkan sebagai collaborator dengan status pending
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

// get collaborators dari organization -> semua member yang aktf bisa melihat
export async function getCollaborators(req: Request, res: Response) {
  try {
    const { organizationId } = req.params;
    const userId = req.user?.id;

    if (!organizationId) {
      return res.status(400).json({ 
        message: "Organization ID is required" 
      });
    }

    // mengecek apakah user adalah anggota aktif atau tidak
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

    // mengambil semua member -> termasuk owner dan status pending
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

// get all undangan untuk user yang login
export async function getUserInvitations(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // get all undangan pending untuk user
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

// accept or reject invitation -> untuk user yang diundang
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

    // mengecek apakah invitation ini milik user yang login atau tidak
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

    // update status berdasarkan action
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

// update collaborator role - hanya owner yang bisa update
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

    // tidak bisa set role OWNER
    if (role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot assign OWNER role. Transfer ownership instead." 
      });
    }

    // ambil data member
    const member = await prisma.organizationMember.findUnique({
      where: { id: memberId },
      include: { organization: true }
    });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    // mengecek apakah user adalah owner atau tidak
    if (member.organization.ownerId !== userId) {
      return res.status(403).json({ 
        message: "Only organization owner can update member roles" 
      });
    }

    // tidak bisa update role owner
    if (member.role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot change owner's role" 
      });
    }

    // update role
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

// delete collaborator - hanya owner
export async function deleteCollaborator(req: Request, res: Response) {
  try {
    const { memberId } = req.params;
    const userId = req.user?.id;

    if (!memberId) {
      return res.status(400).json({ 
        message: "Member ID is required" 
      });
    }

    // mengambil data member
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

    // mengecek apakah user adalah owner atau tidak
    if (member.organization.ownerId !== userId) {
      return res.status(403).json({ 
        message: "Only organization owner can remove members" 
      });
    }

    if (member.userId === userId) {
      return res.status(400).json({ 
        message: "Owner cannot remove themselves. Transfer ownership or delete organization instead." 
      });
    }

    // tidak bisa hapus owner lain
    if (member.role === Role.OWNER) {
      return res.status(400).json({ 
        message: "Cannot remove organization owner" 
      });
    }

    // menghapus member
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