import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import {
    createPlan,
    getPlans,
    getPlanById,
    updatePlan,
    deletePlan,
    hardDeletePlan,
} from "../controllers/plan";

const router = Router();

// ini untuk user yang mau lihat
router.get("/", getPlans);
router.get("/:id", getPlanById);

// ini autentikasi untuk owner, karena nanti dia yang manage
router.post("/", authMiddleware, createPlan);
router.patch("/:id", authMiddleware, updatePlan);

// soft delete
router.delete("/:id", authMiddleware, deletePlan);

// hard delete
router.delete("/:id/permanent", authMiddleware, hardDeletePlan);

export default router;