import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentPage = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(true);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Your Name",
    email: "your.email@example.com",
    about: "Write Something about yourself",
  });

  const logout = () => {
    localStorage.removeItem("lms-token");
    navigate("/signin");
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile Data Updated: ", profileData);
    setIsEditingProfile(false);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-1/4 p-4">
          <h2 className="text-2xl font-bold mb-8">LMS_NAME</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                onClick={() => setShowProfile(true)}
                className="block py-2"
              >
                My Profile
              </a>
            </li>
            <li>
              <a href="/courses" className="block py-2">
                Enrolled Courses
              </a>
            </li>
            <li>
              <a href="/wishlist" className="block py-2">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/settings" className="block py-2">
                Settings
              </a>
            </li>
            <li>
              <button onClick={logout} className="w-full text-left py-2">
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900 text-white flex-1 p-6">
          {showProfile ? (
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4">My Profile</h1>
              {isEditingProfile ? (
                <form
                  onSubmit={handleProfileSubmit}
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="about"
                      className="block mb-2 text-sm font-bold"
                    >
                      About
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      value={profileData.about}
                      onChange={handleProfileChange}
                      className="w-full p-2 border border-gray-300 rounded text-black"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-500 rounded-full w-16 h-16"></div>
                      <div>
                        <h2 className="text-xl">{profileData.name}</h2>
                        <p className="text-gray-300">{profileData.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="bg-yellow-500 text-black px-4 py-2 rounded-md"
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">About</h2>
                    <p>{profileData.about}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default StudentPage;
