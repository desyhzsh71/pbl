import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project";

const router = Router();

// Project routes
router.post("/", authMiddleware, createProject); 
router.get("/", authMiddleware, getProjects); 
router.get("/:id", authMiddleware, getProjectById); 
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

export default router;