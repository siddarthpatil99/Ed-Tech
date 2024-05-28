import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  featuredCourses,
  getCourseDetails,
  getCourses,
} from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create-course", authMiddleware, createCourse);
router.get("/get-courses", getCourses);
router.get("/featured-courses", featuredCourses);
router.delete("/delete-course/:id", authMiddleware, deleteCourse);
router.get("/:id", getCourseDetails);

export default router;
