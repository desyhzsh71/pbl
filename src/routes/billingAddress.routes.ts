import { Router } from "express";
import {
  getBillingAddress,
  createBillingAddress,
  updateBillingAddress,
  deleteBillingAddress,
} from "../controllers/billingAddress";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("/", authMiddleware, getBillingAddress);
router.post("/", authMiddleware, createBillingAddress);
router.put("/", authMiddleware, updateBillingAddress);
router.delete("/", authMiddleware, deleteBillingAddress);

export default router;