import { Router } from "express";
import { createCourse, deleteCourse, featuredCourses, getCourses } from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createCourse);
router.get("/get-courses", getCourses);
router.get("/featured-courses", featuredCourses);
router.delete("/delete-course/:id", deleteCourse);

export default router;