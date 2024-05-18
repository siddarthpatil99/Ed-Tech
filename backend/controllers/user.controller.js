import { User } from "../models/user.model.js";
import { userSchema, updateSchema } from "../zod/user.types.js";
import { generateOTP, sendOTPEmail } from "../utils/otp.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userInput = userSchema.safeParse(req.body);
    if (!userInput.success) {
      return res.status(400).json({ message: "Invalid Inputs" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateOTP();

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      // otp
    });

    // await sendOTPEmail(email, otp);
    await sendOTPEmail(email);

    const userId = newUser._id;
    console.log(userId);

    return res.status(200).json({ message: "User registered", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }

    // const userPwd = existingUser.password;
    // const isPwdCorrect = await bcrypt.compare(password, userPwd);

    // if (!isPwdCorrect) {
    //   return res
    //     .status(403)
    //     .json({ message: "Incorrect Password", success: false });
    // }

    // const token = await jwt.sign(
    //   { userId: existingUser._id },
    //   process.env.JWT_SECRET,
    //   { expiresIn: process.env.JWT_EXPIRY }
    // );

    // return res
    //   .status(200)
    //   .json({ message: "Login Sucsess", token: token, success: true });

    const isPwdCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPwdCorrect) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password", success: false });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY }
    );

    return res
      .status(200)
      .json({ message: "Login success", token, role: existingUser.role });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

export const updateInfo = async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  const { email, name, oldPassword, newPassword } = req.body;

  if (!success) {
    return res
      .status(400)
      .json({ message: "Error while updating information" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    if (name) {
      user.name = name;
    }

    const isPwdCorrect = await bcrypt.compare(oldPassword, user.password);

    if (!isPwdCorrect) {
      return res
        .status(403)
        .json({ message: "Old password is incorrect", success: false });
    }

    const hashNewPwd = await bcrypt.hash(newPassword, 10);

    user.password = hashNewPwd;
    await user.save();

    return res
      .status(200)
      .json({ message: "Updated successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

export const currentUser = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const currentUser = {
      email: user.email,
      name: user.name,
      password: user.password,
    };

    return res.status(200).json({ currentUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

export const usersList = async (req, res) => {
  const userId = req.userId;

  try {
    const users = await User.find({ _id: { $ne: userId } }, { name: 1 });
    console.log(users);
    const userNames = users.map((user) => ({ name: user.name }));
    res.json(userNames);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};
