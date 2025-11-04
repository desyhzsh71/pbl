import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import {
  getBillingAddress,
  createBillingAddress,
  updateBillingAddress,
  deleteBillingAddress,
  getPaymentMethods,
  addPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  setDefaultPaymentMethod,
} from "../controllers/billing";

const router = Router();

router.use(authMiddleware);
router.get("/address", getBillingAddress);
router.post("/address", createBillingAddress);
router.put("/address", updateBillingAddress);
router.delete("/address", deleteBillingAddress);
router.get("/payment-methods", getPaymentMethods);
router.post("/payment-methods", addPaymentMethod);
router.put("/payment-methods/:id", updatePaymentMethod);
router.put("/payment-methods/:id/set-default", setDefaultPaymentMethod);
router.delete("/payment-methods/:id", deletePaymentMethod);

export default router;