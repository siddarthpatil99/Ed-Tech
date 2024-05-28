import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-300 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-100 mb-8">
        The page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-600"
      >
        <IoIosArrowBack className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
