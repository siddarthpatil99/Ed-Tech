import { Router } from "express";
import { createCourse } from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createCourse);

export default router;