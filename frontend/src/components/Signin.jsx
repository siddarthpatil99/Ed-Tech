import axios from "axios";
import toast from "react-hot-toast";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN_URL } from "../apiConfig";
import { UserContext } from "../contexts/UserContext";
import { IoIosArrowBack } from "react-icons/io";

const Signin = () => {
  // const loggedData = useContext(UserContext);
  const {setLoggedUser} = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    try {
      const response = await axios.post(SIGNIN_URL, formData);
      const { token, role } = response.data;
      toast.success("Signed in successfully");
      localStorage.setItem("lms-token", token);
      setLoggedUser(token);
      console.log(response.data);

      setFormData({email: "", password: ""});

      if (role === "student") {
        console.log("Navigating to the student page");
        navigate("/studentpage");
      } else if (role === "instructor") {
        console.log("Navigating to the instructor page");
        navigate("/instructorpage");
      } else {
        // console.log("Invalid role received from the server");
        setError("Invalid role received from the server");
      }

      console.log("Signin response", response.data);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Sign in
        </h2>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-gray-900 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </form>
        <p className="mt-5">
          Don't have an account? <Link to="/signup">Sign Up</Link>
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
