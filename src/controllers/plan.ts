import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  CreatePlanDTO,
  UpdatePlanDTO,
  PlanQueryParams,
} from "../types/plan.types";
import { PlanStatus, SubscriptionStatus } from "../generated";

// create plan
export async function createPlan(req: Request, res: Response) {
  try {
    const { name, price, description, bandwidthLimit, apiCallLimit,
      mediaAssetLimit } = req.body as CreatePlanDTO;

    // validasi
    if (!name || name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Plan name is required",
      });
    }

    if (price === undefined || price < 0) {
      return res.status(400).json({
        success: false,
        message: "Valid price is required",
      });
    }

    if (!bandwidthLimit || !apiCallLimit || !mediaAssetLimit) {
      return res.status(400).json({
        success: false,
        message: "All limits (bandwidth, API calls, media assets) are required",
      });
    }

    // mengecek apakah plan dengan nama yang sama sudah ada atau todak
    const existingPlan = await prisma.plan.findFirst({
      where: {
        name: {
          equals: name.trim(),
          mode: "insensitive",
        },
      },
    });

    if (existingPlan) {
      return res.status(400).json({
        success: false,
        message: "Plan with this name already exists",
      });
    }

    // membuat plan baru
    const plan = await prisma.plan.create({
      data: {
        name: name.trim(),
        price,
        description: description?.trim(),
        bandwidthLimit,
        apiCallLimit,
        mediaAssetLimit,
        status: PlanStatus.active,
      },
    });

    res.status(201).json({
      success: true,
      message: "Plan created successfully",
      data: plan,
    });
  } catch (error) {
    console.error("Error creating plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create plan",
    });
  }
}

// get all plans -> semua user bisa lihat
export async function getPlans(req: Request, res: Response) {
  try {
    const {
      status,
      search,
      page = 1,
      limit = 10,
      sortBy = "price",
      sortOrder = "asc",
    } = req.query as PlanQueryParams;

    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};

    // filter by status
    if (status) {
      where.status = status;
    } else {
      // hanya menampilkan dengan status active
      where.status = PlanStatus.active;
    }

    // search by name
    if (search) {
      where.name = {
        contains: search,
        mode: "insensitive",
      };
    }

    const [plans, total] = await Promise.all([
      prisma.plan.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { [sortBy]: sortOrder },
        include: {
          _count: {
            select: {
              subscriptions: true,
            },
          },
        },
      }),
      prisma.plan.count({ where }),
    ]);

    // menambahkan stats untuk setiap plan
    const plansWithStats = await Promise.all(
      plans.map(async (plan) => {
        const activeSubscribers = await prisma.subscription.count({
          where: {
            planId: plan.id,
            status: SubscriptionStatus.active,
          },
        });

        return {
          ...plan,
          stats: {
            totalSubscribers: plan._count.subscriptions,
            activeSubscribers,
          },
        };
      })
    );

    res.status(200).json({
      success: true,
      message: "Plans retrieved successfully",
      data: plansWithStats,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error("Error getting plans:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get plans",
    });
  }
}

// get plan dengan ID
export async function getPlanById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    const plan = await prisma.plan.findUnique({
      where: { id: Number(id) },
      include: {
        _count: {
          select: {
            subscriptions: true,
          },
        },
      },
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // get subscription yang aktif
    const activeSubscribers = await prisma.subscription.count({
      where: {
        planId: plan.id,
        status: SubscriptionStatus.active,
      },
    });

    res.status(200).json({
      success: true,
      message: "Plan retrieved successfully",
      data: {
        ...plan,
        stats: {
          totalSubscribers: plan._count.subscriptions,
          activeSubscribers,
        },
      },
    });
  } catch (error) {
    console.error("Error getting plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get plan",
    });
  }
}

// update plan
export async function updatePlan(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updateData = req.body as UpdatePlanDTO;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    // mengecek apakah plan ada
    const existingPlan = await prisma.plan.findUnique({
      where: { id: Number(id) },
      include: {
        _count: {
          select: {
            subscriptions: true,
          },
        },
      },
    });

    if (!existingPlan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // warning jika plan mempunyai subscriber aktif
    const activeSubscribers = await prisma.subscription.count({
      where: {
        planId: Number(id),
        status: SubscriptionStatus.active,
      },
    });

    // mengecek apakah nama plan sudah dipakai plan lain atau tidak
    if (updateData.name) {
      const duplicateName = await prisma.plan.findFirst({
        where: {
          name: {
            equals: updateData.name.trim(),
            mode: "insensitive",
          },
          NOT: {
            id: Number(id),
          },
        },
      });

      if (duplicateName) {
        return res.status(400).json({
          success: false,
          message: "Plan with this name already exists",
        });
      }
    }

    // update plan
    const updated = await prisma.plan.update({
      where: { id: Number(id) },
      data: {
        ...(updateData.name && { name: updateData.name.trim() }),
        ...(updateData.price !== undefined && { price: updateData.price }),
        ...(updateData.description !== undefined && {
          description: updateData.description?.trim(),
        }),
        ...(updateData.bandwidthLimit && {
          bandwidthLimit: updateData.bandwidthLimit,
        }),
        ...(updateData.apiCallLimit && {
          apiCallLimit: updateData.apiCallLimit,
        }),
        ...(updateData.mediaAssetLimit && {
          mediaAssetLimit: updateData.mediaAssetLimit,
        }),
        ...(updateData.status && { status: updateData.status }),
      },
    });

    res.status(200).json({
      success: true,
      message: "Plan updated successfully",
      data: updated,
      warning:
        activeSubscribers > 0
          ? `This plan has ${activeSubscribers} active subscribers. Changes may affect them.`
          : undefined,
    });
  } catch (error) {
    console.error("Error updating plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update plan",
    });
  }
}

// delete plan -> ini mengubah statusnya menjadi tidak aktif
export async function deletePlan(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    // mengecek apakah plan ada
    const plan = await prisma.plan.findUnique({
      where: { id: Number(id) },
      include: {
        _count: {
          select: {
            subscriptions: true,
          },
        },
      },
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // mengecek apakah ada subscriber yang aktif
    const activeSubscribers = await prisma.subscription.count({
      where: {
        planId: Number(id),
        status: SubscriptionStatus.active,
      },
    });

    if (activeSubscribers > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete plan with ${activeSubscribers} active subscribers. Set plan status to inactive instead.`,
      });
    }

    // soft delete -> mengubah menjadi status inactive
    const deleted = await prisma.plan.update({
      where: { id: Number(id) },
      data: {
        status: PlanStatus.inactive,
      },
    });

    res.status(200).json({
      success: true,
      message: "Plan deactivated successfully",
      data: {
        id: deleted.id,
        name: deleted.name,
        status: deleted.status,
      },
    });
  } catch (error) {
    console.error("Error deleting plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete plan",
    });
  }
}

// hard delete plan -> menghapus secara permanen apabila subscriber tidak ada
export async function hardDeletePlan(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Plan ID is required",
      });
    }

    // mengecek apakah plan ada
    const plan = await prisma.plan.findUnique({
      where: { id: Number(id) },
      include: {
        _count: {
          select: {
            subscriptions: true,
            billingHistories: true,
          },
        },
      },
    });

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // mengecek apakah ada subscription atau billing history
    if (
      plan._count.subscriptions > 0 ||
      plan._count.billingHistories > 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Cannot permanently delete plan with existing subscriptions or billing history",
      });
    }

    // hard delete
    await prisma.plan.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      success: true,
      message: "Plan permanently deleted",
      data: {
        id: plan.id,
        name: plan.name,
      },
    });
  } catch (error) {
    console.error("Error hard deleting plan:", error);
    res.status(500).json({
      success: false,
      message: "Failed to permanently delete plan",
    });
  }
}