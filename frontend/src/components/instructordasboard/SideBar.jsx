import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("lms-token");
        navigate("/signin");
    }
  return (
    <>
      <div className="bg-gray-800 text-white p-4 top-0 left-0 h-full w-64 fixed">
        <h2 className="text-2xl font-bold mb-8">Ed-Tech</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/instructorpage/profile" className="block py-2">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/instructorpage/manage-courses" className="block py-2">
              Manage Courses
            </Link>
          </li>
          <li>
            <Link to="/instructorpage/add-course" className="block py-2">
              Add Courses
            </Link>
          </li>
          <li>
            <Link to="/instructorpage/settings" className="block py-2">
              Settings
            </Link>
          </li>
          <li>
            <button onClick={logout} className="w-full text-left py-2">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar
