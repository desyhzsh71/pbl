import { Router } from "express";
import {
  subscribePlan,
  getSubscriptionByOrganization,
  updateSubscription,
  cancelSubscription,
  upgradePlan,
} from "../controllers/subscription";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.post("/", subscribePlan);

// ini get subscription dari pov organisasi
router.get("/organization/:organizationId", getSubscriptionByOrganization);
router.patch("/:subscriptionId", updateSubscription);
router.patch("/:subscriptionId/upgrade", upgradePlan);
router.post("/:subscriptionId/cancel", cancelSubscription);

export default router;