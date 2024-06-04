import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AboutUs = () => {
  const handleAboutClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Navigation Bar */}
        
        <Navbar />
        {/* Main Content */}
        <div className="flex-grow p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-lg text-gray-300">
                Learn more about our mission and the values that drive us.
              </p>
            </section>

            {/* Company Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
                We are a dedicated team committed to providing high-quality
                education and training to students worldwide. Our platform
                offers a wide range of courses, resources, and tools to help
                learners achieve their goals.
              </p>
            </section>

            {/* How It Works Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                  <p className="text-lg text-gray-300">
                    Create an account to get started.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Browse Courses</h3>
                  <p className="text-lg text-gray-300">
                    Explore our extensive course catalog.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
                  <p className="text-lg text-gray-300">
                    Access your courses and begin learning.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-4">
                We would love to hear from you! If you have any questions,
                suggestions, or just want to say hello, feel free to reach out
                to us.
              </p>
              <p className="text-lg text-gray-300">
                Email: info@yourwebsite.com
              </p>
              <p className="text-lg text-gray-300">Phone: (123) 456-7890</p>
            </section>
          </div>
        </div>

        {/* Footer */}
        {/* <footer className="bg-gray-800 p-4 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-400">
              &copy; 2024 LMS_NAME. All rights reserved.
            </p>
          </div>
        </footer> */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
