import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Ed-Tech</div>
          <div className="flex-grow flex justify-center space-x-4">
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
          <div className="space-x-4">
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
        </div>
      </nav>
    </>
  );
}

export default Navbar
