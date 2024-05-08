import { User } from "../models/user.model.js";
import { generateOTP, sendOTPEmail } from "../utils/otp.js";

export const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP();

    await sendOTPEmail(email, otp);

    return res
      .status(200)
      .json({ message: "OTP sent successfully", otp, success: true });
  } catch (error) {
    console.log("Error sending OTP email ", error);
    return res.status(500).json({
      message: "Failed to send OTP email",
      error: error.message,
      success: false,
    });
  }
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
 
  try {
    
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found", success: false });
    }

    if (user.otp !== otp) {
      return res.status(400).json({message: "Invalid OTP"});
    }

    // Clear OTP from user document after the verification
    // user.otp = undefined;
    // await user.save();

    return res
      .status(200)
      .json({ message: "OTP verified successfully", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Somthing went wrong",
      error: error.message,
      success: false,
    });
  }
};
