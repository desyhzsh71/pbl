import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { isOwner, isActiveMember } from "../middlewares/checkRole";
import {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
} from "../controllers/organization";

const router = Router();

router.post("/", authMiddleware, createOrganization); // Create org - user jadi owner otomatis
router.get("/", authMiddleware, getOrganizations); // Get all user's organizations
router.get("/:id", authMiddleware, isActiveMember, getOrganizationById); // Get detail - active member only
router.put("/:id", authMiddleware, isOwner, updateOrganization); // Update - owner only
router.delete("/:id", authMiddleware, isOwner, deleteOrganization); // Delete - owner only

export default router;