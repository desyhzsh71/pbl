import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  CreateProjectDTO,
  UpdateProjectDTO,
  ProjectQueryParams,
} from "../types/project.types";
import { ProjectStatus, ProjectRole, Status } from "../generated";

// create project - semua member aktif organisasi bisa membuat/menambahkan project baru
export async function createProject(req: Request, res: Response) {
  try {
    const { name, description, organizationId, deadline } =
      req.body as CreateProjectDTO;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!name || name.trim() === "") {
      return res.status(400).json({ message: "Project name is required" });
    }

    if (!organizationId) {
      return res.status(400).json({ message: "Organization ID is required" });
    }

    // mengecek apakah user adalah member aktif di organisasi
    const member = await prisma.organizationMember.findFirst({
      where: {
        organizationId,
        userId,
        status: Status.ACTIVE,
      },
    });

    if (!member) {
      return res.status(403).json({
        message: "Only active organization members can create projects",
      });
    }

    // buat project -> otomatis menambahkan creator sebagai owner di ProjectCollaborator
    const project = await prisma.project.create({
      data: {
        name: name.trim(),
        description: description?.trim(),
        organizationId,
        createdBy: userId,
        deadline: deadline ? new Date(deadline) : undefined,
        status: ProjectStatus.ACTIVE,
        collaborators: {
          create: {
            userId,
            role: ProjectRole.OWNER,
            status: Status.ACTIVE,
            addedAt: new Date(),
          },
        },
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        creator: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        collaborators: {
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
        },
        _count: {
          select: {
            collaborators: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: "Failed to create project" });
  }
}

// get all projects
export async function getProjects(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const {
      organizationId,
      search,
      status,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query as ProjectQueryParams;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {
      collaborators: {
        some: {
          userId,
          status: Status.ACTIVE,
        },
      },
    };

    if (organizationId) {
      // verifikasi user jika merupakan member aktif organisasi
      const isMember = await prisma.organizationMember.findFirst({
        where: {
          organizationId,
          userId,
          status: Status.ACTIVE,
        },
      });

      if (!isMember) {
        return res.status(403).json({
          message: "You don't have access to this organization",
        });
      }

      where.organizationId = organizationId;
    }

    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (status) {
      where.status = status;
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { [sortBy]: sortOrder },
        include: {
          organization: {
            select: {
              id: true,
              name: true,
            },
          },
          creator: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          collaborators: {
            where: { status: Status.ACTIVE },
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  email: true,
                },
              },
            },
          },
          _count: {
            select: {
              collaborators: true,
            },
          },
        },
      }),
      prisma.project.count({ where }),
    ]);

    // add user role info
    const projectsWithUserRole = projects.map((project) => {
      const userCollaborator = project.collaborators.find(
        (c) => c.userId === userId
      );

      return {
        ...project,
        userRole: userCollaborator?.role || null,
        isCreator: project.createdBy === userId,
      };
    });

    res.status(200).json({
      data: projectsWithUserRole,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error("Error getting projects:", error);
    res.status(500).json({ message: "Failed to get projects" });
  }
}

// get project ID
export async function getProjectById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // get project hanya ketika user adalah collaborator aktif
    const project = await prisma.project.findFirst({
      where: {
        id,
        collaborators: {
          some: {
            userId,
            status: Status.ACTIVE,
          },
        },
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        creator: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        collaborators: {
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
        },
        _count: {
          select: {
            collaborators: true,
          },
        },
      },
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found or access denied",
      });
    }

    // get user role
    const userCollaborator = project.collaborators.find(
      (c) => c.userId === userId
    );

    const stats = {
      totalCollaborators: project._count.collaborators,
      activeCollaborators: project.collaborators.filter(
        (c) => c.status === Status.ACTIVE
      ).length,
      pendingCollaborators: project.collaborators.filter(
        (c) => c.status === Status.PENDING
      ).length,
      ownerCount: project.collaborators.filter(
        (c) => c.role === ProjectRole.OWNER && c.status === Status.ACTIVE
      ).length,
      editorCount: project.collaborators.filter(
        (c) => c.role === ProjectRole.EDITOR && c.status === Status.ACTIVE
      ).length,
      viewerCount: project.collaborators.filter(
        (c) => c.role === ProjectRole.VIEWER && c.status === Status.ACTIVE
      ).length,
    };

    res.status(200).json({
      data: {
        ...project,
        userRole: userCollaborator?.role || null,
        isCreator: project.createdBy === userId,
        stats,
      },
    });
  } catch (error) {
    console.error("Error getting project:", error);
    res.status(500).json({ message: "Failed to get project" });
  }
}

// update project - hanya owner
export async function updateProject(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, description, deadline, status, customDomain } =
      req.body as UpdateProjectDTO;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah user adalah owner atau tidak
    const collaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId: id,
        userId,
        role: ProjectRole.OWNER,
        status: Status.ACTIVE,
      },
    });

    if (!collaborator) {
      return res.status(403).json({
        message: "Only project owners can update the project",
      });
    }

    // update project
    const updated = await prisma.project.update({
      where: { id },
      data: {
        ...(name && { name: name.trim() }),
        ...(description !== undefined && { description: description?.trim() }),
        ...(deadline && { deadline: new Date(deadline) }),
        ...(status && { status }),
        ...(customDomain !== undefined && { customDomain }),
      },
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
        creator: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        collaborators: {
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
        },
        _count: {
          select: {
            collaborators: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Project updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({ message: "Failed to update project" });
  }
}

// delete project - hanya owner project
export async function deleteProject(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // mengecek apakah user adalah owner atau tidak
    const collaborator = await prisma.projectCollaborator.findFirst({
      where: {
        projectId: id,
        userId,
        role: ProjectRole.OWNER,
        status: Status.ACTIVE,
      },
    });

    if (!collaborator) {
      return res.status(403).json({
        message: "Only project owners can delete the project",
      });
    }

    // delete project (cascade akan sekaligus menghapus collaborators)
    await prisma.project.delete({
      where: { id },
    });

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: "Failed to delete project" });
  }
}