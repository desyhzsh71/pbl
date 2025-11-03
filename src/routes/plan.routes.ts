import { Router } from "express";
import {
  createPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
} from "../controllers/plan";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("/", getAllPlans);
router.get("/:planId", getPlanById);

router.post("/", authMiddleware, createPlan);
router.patch("/:planId", authMiddleware, updatePlan); 
router.delete("/:planId", authMiddleware, deletePlan); 

export default router;