import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CURRENT_USER } from "../../apiConfig"; 
import { FaUser, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const StudentProfile = () => {
    const [profileData, setProfileData] = useState({
      name: "",
      email: "",
      role: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const token = localStorage.getItem("lms-token");
          const response = await axios.get(CURRENT_USER, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setProfileData(response.data.currentUser);
        } catch (error) {
          setError("Failed to fetch profile");
          console.error("Error fetching profile:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }, []);

    const handleEditClick = () => {
      navigate("/studentpage/settings");
      console.log("Edit button clicked");
    };

    const capitalizeFirstLetter = (str) => {
      return str
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <FaSpinner className="animate-spin text-blue-500 mr-2" />
          <span>Loading...</span>
        </div>
      );
    }

    if (error) {
      return <div>{error}</div>;
    }

  return (
    <>
      <div className="h-full p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center">
                <FaUser className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">{profileData.name}</h2>
                <p className="text-gray-300 mt-3">{profileData.email}</p>
                <p className="text-gray-300">
                  Role: {capitalizeFirstLetter(profileData.role)}
                </p>
              </div>
            </div>
            <button
              onClick={handleEditClick}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile
