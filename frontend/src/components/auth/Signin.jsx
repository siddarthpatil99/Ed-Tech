import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN_URL } from "../../apiConfig";
import { IoIosArrowBack } from "react-icons/io";
import { LoaderCircle } from "lucide-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Implement sign-in logic here
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post(SIGNIN_URL, formData);
      const { token, role, userId } = response.data;
      toast.success("Signed in successfully");
      localStorage.setItem("lms-token", token);
      localStorage.setItem("instructorId", userId);

      setFormData({ email: "", password: "" });

      if (role === "student") {
        navigate("/student/profile");
      } else if (role === "instructor") {
        navigate("/instructor/profile");
      } else {
        setError("Invalid role received from the server");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-900 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-8 relative">
            <label
              htmlFor="password"
              className="block text-gray-900 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 pr-3 mt-8 flex items-center text-gray-600"
            >
              {showPassword ? (
                <AiFillEye className="h-6 w-6" />
              ) : (
                <AiFillEyeInvisible className="h-6 w-6" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <LoaderCircle className="h-5 w-5 animate-spin " />
              </div>
            ) : (
              <span className="">Sign in</span>
            )}
          </button>
        </form>
        <p className="mt-5 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
        <p className="mt-2">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <IoIosArrowBack className="mr-1" />
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
