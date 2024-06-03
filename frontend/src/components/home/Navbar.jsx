import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">
            <span className="text-blue-500 pr-1">Ed</span>-
            <span className="pl-1">Tech</span>
          </h2>
          <div className="hidden md:flex flex-grow justify-center space-x-4">
            <Link to="/home" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="/aboutus" className="text-white hover:text-gray-400">
              About Us
            </Link>
            <Link to="/contactus" className="text-white hover:text-gray-400">
              Contact Us
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signin"
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
            >
              Signup
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link to="/home" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="/aboutus" className="text-white hover:text-gray-400">
              About Us
            </Link>
            <Link to="/contactus" className="text-white hover:text-gray-400">
              Contact Us
            </Link>
            <Link
              to="/signin"
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded"
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
