import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { isOwner, isActiveMember } from "../middlewares/checkRole";
import {
  addCollaborator,
  getCollaborators,
  getUserInvitations,
  respondToInvitation,
  updateCollaboratorRole,
  deleteCollaborator
} from "../controllers/collaborator";

const router = Router();

router.get("/invitations", authMiddleware, getUserInvitations); // Get user's invitations

// Collaborator management routes
router.post("/", authMiddleware, isOwner, addCollaborator); // Add collaborator - owner only
router.get("/:organizationId", authMiddleware, isActiveMember, getCollaborators); // Get collaborators - active member
router.put("/:memberId/respond", authMiddleware, respondToInvitation); // Accept/reject invitation - invited user
router.put("/:memberId/role", authMiddleware, isOwner, updateCollaboratorRole); // Update role - owner only
router.delete("/:memberId", authMiddleware, isOwner, deleteCollaborator); // Remove member - owner only

export default router;