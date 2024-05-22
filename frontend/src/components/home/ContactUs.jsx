import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const ContactUs = () => {
  const location = useLocation();

  const handleNavClick = (event, path) => {
    if (location.pathname === path) {
      event.preventDefault();
    }
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
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-300">
                Got an Idea? We've got the skills. Let's team up
              </p>
            </section>

            {/* Contact Form Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg mb-4">
                  <strong>Chat with us:</strong> Our friendly team is here to
                  help.
                </p>
                <p className="text-lg mb-4">
                  Email:{" "}
                  <a
                    href="mailto:info@mail.com"
                    className="text-blue-400 hover:underline"
                  >
                    info@mail.com
                  </a>
                </p>
                <p className="text-lg mb-4">
                  <strong>Visit us:</strong>
                </p>
                <p className="text-lg mb-4">Vidya Nagar, Hubballi - 580031</p>
                <p className="text-lg mb-4">
                  <strong>Call us:</strong> Mon - Fri from 8am to 5pm
                </p>
                <p className="text-lg">
                  Phone:{" "}
                  <a
                    href="tel:+123456789"
                    className="text-blue-400 hover:underline"
                  >
                    +123 456 7890
                  </a>
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 rounded-md bg-gray-900 text-white"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 rounded-md bg-gray-900 text-white"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 rounded-md bg-gray-900 text-white"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="flex">
                      <select className="p-2 rounded-l-md bg-gray-900 text-white border-r border-gray-700">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        className="flex-grow p-2 rounded-r-md bg-gray-900 text-white"
                        placeholder="12345 67890"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-2 rounded-md bg-gray-900 text-white"
                      rows="4"
                      placeholder="Enter Your Message Here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 px-4 py-2 rounded-md text-white hover:bg-yellow-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
