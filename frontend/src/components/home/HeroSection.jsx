import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="bg-gray-900 bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Unlock Your Potential with Our Online Courses
        </h1>
        <p className="text-base md:text-2xl mb-8">
          Learn from the best instructors from around the world.
        </p>
        <button
          onClick={handleOnClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Get Started
        </button>
        <div className="bg-gray-800 text-center py-12 px-4 w-full mt-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center">
              <div
                className="bg-blue-500 text-white rounded-full p-4 mb-4 cursor-pointer"
                onClick={handleOnClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Sign Up
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Create an account to get started.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-green-500 text-white rounded-full p-4 mb-4 cursor-pointer"
                onClick={handleOnClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Enroll
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Choose your desired courses.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-yellow-500 text-white rounded-full p-4 mb-4 cursor-pointer"
                onClick={handleOnClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                Start Learning
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Access your courses and begin learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
