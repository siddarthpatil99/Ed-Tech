import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UPDATE_USER } from '../../apiConfig';
import toast from 'react-hot-toast';

const InstructorSettings = () => {

  const [formData, setFormData] = useState({
    name: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      // setError("New password and confirm password do not match");
      toast.error("New password & confirm password do not match");
      return;
    }
    try {
      const token = localStorage.getItem("lms-token");
      if (!token) {
        toast.error("Unauthorized: No token provided");
        navigate("/signin");
        return;
      }

      const response = await axios.put(
        UPDATE_USER,
        {
          name: formData.name,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully");
        navigate("/instructorpage/profile");
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data === 403) {
        toast.error("Unauthorized: Invalid or expired token");
        navigate("/signin");
      } else {
        toast.error("Failed to update profile");
      }
    }
  };

  return (
    <div className="h-full p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Instructor Settings</h1>
      <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-lg">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block mb-2 text-sm font-bold">
            Current Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2 text-sm font-bold">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-bold"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default InstructorSettings
