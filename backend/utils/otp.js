import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTPEmail = async (email, otp) => {
  // const otp = generateOTP();

  try {
    // Create a transporter using SMTP transport
    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      // port: 465,
      // secure: true,
      service: "gmail",
      auth: {
        user: "sharanpatil843@gmail.com",
        pass: "pdnopnazomyrbjpp",
      },
    });

    

    await transporter.sendMail({
      from: "sharanpatil843@gmail.com",
      to: email,
      subject: "Verification OTP",
      text: `Your OTP is: ${otp}`,
    });

    console.log("OTP sent to email: ", email);
  } catch (error) {
    console.log("Error sending email: ", error);
    throw error;
  }
};
