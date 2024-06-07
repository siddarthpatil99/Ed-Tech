import { Router } from "express";
import {
  currentUser,
  deleteAccount,
  signIn,
  signUp,
  updateUser,
  usersList,
} from "../controllers/user.controller.js";
import { sendEmail, verifyOTP } from "../controllers/otp.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.post("/send-otp", sendEmail);
router.post("/verify-otp", verifyOTP);

router.put("/updateUser", authMiddleware, updateUser);

router.get("/usersList", authMiddleware, usersList);
router.get("/currentUser", authMiddleware, currentUser);

router.delete("/deleteAccount", authMiddleware, deleteAccount);

export default router;
