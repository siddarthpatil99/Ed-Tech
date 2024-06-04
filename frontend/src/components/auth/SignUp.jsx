import React, { useEffect, useState } from "react";
import { SEND_OTP, VERIFY_OTP, SIGNUP_URL } from "../../apiConfig";
import { useNavigate, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Loader, LoaderCircle } from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    otp: "",
  });

  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [isOTPGenerated, setIsOTPGenerated] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingSignup, setLoadingSignup] = useState(false);

  useEffect(() => {
    const storedOTP = localStorage.getItem("otp");
    if (storedOTP) {
      setIsOTPGenerated(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateOTP = async () => {
    setLoadingOTP(true);
    // Logic to generate OTP and send it to the user's email
    try {
      const response = await axios.post(SEND_OTP, { email: formData.email });

      if (response.data.success) {
        toast.success("OTP generated and sent to your email");
        localStorage.setItem("email", formData.email);
        localStorage.setItem("otp", response.data.otp);
        alert("OTP generated and sent to your email.");
        setIsOTPGenerated(true);
      } else {
        toast.error("Failed to generate OTP. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to generate OTP: ", error);
      toast.error("Failed to generate OTP. Please try again later.");
    } finally {
      setLoadingOTP(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoadingVerify(true);
    // const storedEmail = localStorage.getItem("email");
    const storedOTP = localStorage.getItem("otp");

    const enteredOTP = formData.otp;

    if (enteredOTP === storedOTP) {
      toast.success("OTP verified successfully");
      console.log("OTP verified successfully");
      setIsOTPVerified(true);
      localStorage.removeItem("email");
      localStorage.removeItem("otp");
    } else {
      console.log("OTP verification failed");
      toast.error("OTP verification failed")
    }
    setLoadingVerify(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSignup(true);
    const { name, email, password, role, otp } = formData;
    try {
      const response = await axios.post(SIGNUP_URL, {
        name,
        email,
        password,
        role,
        otp,
      });

      if (response.status == 200) {
        toast.success("Signed up successfully");
        localStorage.removeItem("email");
        localStorage.removeItem("otp");
        navigate("/signin");
      } else {
        console.error("Registration failed");
        toast.error("Registration failed. Please try again.")
      }
    } catch (error) {
      console.error("Error registering user: ", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoadingSignup(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* <h2 className="text-3xl font-semibold mb-6 text-center text-gray-200">
          Sign Up
        </h2> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 text-gray-800"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 text-gray-800"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 text-gray-800"
              required
            />
          </div>
          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 text-gray-800"
            >
              <option value="" disabled>Select Role</option>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="OTP"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-600 focus:outline-none focus:border-blue-500 transition duration-300 text-gray-800"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleGenerateOTP}
              disabled={isOTPGenerated || isOTPVerified || loadingOTP}
              // className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
              className={`px-6 py-3 rounded-lg transition duration-300 focus:outline-none ${
                isOTPGenerated || isOTPVerified || loadingOTP
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {/* Generate OTP */}
              {loadingOTP ? (
                <div className="flex justify-center items-center">
                  <Loader className="h-5 w-5 animate-spin" />
                </div>
              ) : (
                "Generate OTP"
              )}
            </button>
            <button
              type="button"
              onClick={handleVerifyOTP}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none transition duration-300"
            >
              {/* Verify OTP */}
              {loadingVerify ? (
                <div className="flex justify-center items-center">
                  <Loader className="h-5 w-5 animate-spin" />
                </div>
              ) : (
                "Verify OTP"
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={!isOTPVerified || loadingSignup}
            // className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none transition duration-300"
            className={`w-full px-6 py-3 rounded-lg focus:outline-none transition duration-300 ${
              isOTPVerified
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {/* Sign Up */}
            {loadingSignup ? (
              <div className="flex justify-center items-center">
                <LoaderCircle className="h-5 w-5 animate-spin" />
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <p className="mt-5 text-white">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
        <p className="mt-2">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-white"
          >
            <IoIosArrowBack className="mr-1" />
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
