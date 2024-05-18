import { Router } from "express";
import { createCourse, getCourses } from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createCourse);
router.get("/get-courses", authMiddleware, getCourses);

export default router;