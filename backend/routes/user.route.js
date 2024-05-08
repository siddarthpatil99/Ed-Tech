import { Router } from "express";
import { signIn, signUp, updateInfo, usersList } from "../controllers/user.controller.js";
import { sendEmail, verifyOTP } from "../controllers/otp.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.post("/send-otp", sendEmail);
router.post("/verify-otp", verifyOTP);

router.put("/", authMiddleware, updateInfo);

router.get("/usersList", authMiddleware, usersList)

export default router;