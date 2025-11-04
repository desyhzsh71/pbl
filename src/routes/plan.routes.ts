import { Router } from "express";
import { 
  getAllPlans, 
  getPlanById, 
  comparePlans 
} from "../controllers/plan";

const router = Router();

router.get("/", getAllPlans);
router.get("/compare", comparePlans);
router.get("/:id", getPlanById);

export default router;