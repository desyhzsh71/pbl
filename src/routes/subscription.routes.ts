import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import {
  getCurrentSubscription,
  createSubscription,
  upgradeSubscription,
  cancelSubscription,
} from "../controllers/subscription";

const router = Router();

router.get("/current", getCurrentSubscription);
router.post("/create", createSubscription);
router.put("/upgrade", upgradeSubscription);
router.post("/cancel", cancelSubscription);

export default router;