import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  AddProjectCollaboratorDTO,
  UpdateProjectCollaboratorRoleDTO,
} from "../types/project.types";
import { ProjectRole, Status } from "../generated";

// add collaborator ke project - hanya owner project yang bisa menambahkan
export async function addProjectCollaborator(req: Request, res: Response) {
  try {
    const { projectId, userId: targetUserId, role } = req.body as AddProjectCollaboratorDTO;
    const currentUserId = req.user?.id;

    if (!currentUserId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah current user adalah owner
    const currentUserCollaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId,
        userId: currentUserId,
        role: ProjectRole.OWNER,
        status: Status.ACTIVE,
      },
    });

    if (!currentUserCollaborator) {
      return res.status(403).json({
        message: "Only project owners can add collaborators",
      });
    }

    // mengecek apakah target user ada
    const targetUser = await prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!targetUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // mengecek apakah target user adalah member organisasi
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { organizationId: true },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const isOrgMember = await prisma.organizationMember.findFirst({
      where: {
        organizationId: project.organizationId,
        userId: targetUserId,
        status: Status.ACTIVE,
      },
    });

    if (!isOrgMember) {
      return res.status(400).json({
        message: "User must be an active organization member first",
      });
    }

    // mengecek apakah user sudah menjadi collaborator
    const existingCollaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId,
        userId: targetUserId,
      },
    });

    if (existingCollaborator) {
      return res.status(400).json({
        message: "User is already a collaborator in this project",
      });
    }

    // tambahkan collaborator
    const collaborator = await prisma.projectCollaborator.create({
      data: {
        projectId,
        userId: targetUserId,
        role,
        status: Status.ACTIVE,
        addedAt: new Date(),
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
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Collaborator added successfully",
      data: collaborator,
    });
  } catch (error) {
    console.error("Error adding collaborator:", error);
    res.status(500).json({ message: "Failed to add collaborator" });
  }
}

// get project collaborators
export async function getProjectCollaborators(req: Request, res: Response) {
  try {
    const { projectId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah user adalah collaborator di project
    const userCollaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId,
        userId,
        status: Status.ACTIVE,
      },
    });

    if (!userCollaborator) {
      return res.status(403).json({
        message: "You don't have access to this project",
      });
    }

    // get all collaborators
    const collaborators = await prisma.projectCollaborator.findMany({
      where: { projectId },
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
      },
      orderBy: { addedAt: "desc" },
    });

    res.status(200).json({
      data: collaborators,
    });
  } catch (error) {
    console.error("Error getting collaborators:", error);
    res.status(500).json({ message: "Failed to get collaborators" });
  }
}

// update collaborator role -> hanya owner project
export async function updateProjectCollaboratorRole(req: Request, res: Response) {
  try {
    const { projectId, collaboratorId } = req.params;
    const { role } = req.body as UpdateProjectCollaboratorRoleDTO;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah current user adalah owner
    const currentUserCollaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId,
        userId,
        role: ProjectRole.OWNER,
        status: Status.ACTIVE,
      },
    });

    if (!currentUserCollaborator) {
      return res.status(403).json({
        message: "Only project owners can update collaborator roles",
      });
    }

    // mengecek apakah collaborator yang ingin diupdate ada atau tidak
    const collaborator = await prisma.projectCollaborator.findUnique({
      where: { id: collaboratorId },
    });

    if (!collaborator || collaborator.projectId !== projectId) {
      return res.status(404).json({ message: "Collaborator not found" });
    }

    // owner tidak bisa mengubah rolenya sendiri
    if (collaborator.userId === userId) {
      return res.status(400).json({
        message: "You cannot change your own role",
      });
    }

    // update role
    const updated = await prisma.projectCollaborator.update({
      where: { id: collaboratorId },
      data: { role },
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
      },
    });

    res.status(200).json({
      message: "Collaborator role updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating collaborator role:", error);
    res.status(500).json({ message: "Failed to update collaborator role" });
  }
}

// remove collaborator from project -> hanya owner yang bisa menghapus
export async function removeProjectCollaborator(req: Request, res: Response) {
  try {
    const { projectId, collaboratorId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah current user adalah owner atau tidak
    const currentUserCollaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId,
        userId,
        role: ProjectRole.OWNER,
        status: Status.ACTIVE,
      },
    });

    if (!currentUserCollaborator) {
      return res.status(403).json({
        message: "Only project owners can remove collaborators",
      });
    }

    // mengecek apakah collaborator yang mau dihapus ada
    const collaborator = await prisma.projectCollaborator.findUnique({
      where: { id: collaboratorId },
    });

    if (!collaborator || collaborator.projectId !== projectId) {
      return res.status(404).json({ message: "Collaborator not found" });
    }

    if (collaborator.userId === userId) {
      return res.status(400).json({
        message: "You cannot remove yourself from the project",
      });
    }

    if (collaborator.role === ProjectRole.OWNER) {
      const ownerCount = await prisma.projectCollaborator.count({
        where: {
          projectId,
          role: ProjectRole.OWNER,
          status: Status.ACTIVE,
        },
      });

      if (ownerCount <= 1) {
        return res.status(400).json({
          message: "Cannot remove the last owner from the project",
        });
      }
    }

    // delete collaborator
    await prisma.projectCollaborator.delete({
      where: { id: collaboratorId },
    });

    res.status(200).json({
      message: "Collaborator removed successfully",
    });
  } catch (error) {
    console.error("Error removing collaborator:", error);
    res.status(500).json({ message: "Failed to remove collaborator" });
  }
}