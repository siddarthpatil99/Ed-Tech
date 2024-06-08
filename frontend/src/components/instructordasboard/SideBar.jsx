import { CircleUser, BookText, Settings, BookPlus } from "lucide-react";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.removeItem("lms-token");
    toast.success("Logged out successfully");
    navigate("/home");
  };
  return (
    <>
      <div className="bg-gray-800 text-white p-4 top-0 left-0 h-full w-64 fixed">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-blue-500 pr-1">Ed</span>-
          <span className="pl-1">Tech</span>
        </h2>
        <ul className="space-y-4 font-bold">
          <Link
            to="/instructor/profile"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2  hover:bg-gray-600 hover:rounded-md ${
                pathname === "/instructor/profile"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <CircleUser />
              <span className="tracking-[2px]">My Profile</span>
            </li>
          </Link>
          <Link
            to="/instructor/manage-courses"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2  hover:bg-gray-600 hover:rounded-md ${
                pathname === "/instructor/manage-courses"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <BookText />
              <span className="tracking-[2px]">Manage Courses</span>
            </li>
          </Link>
          <Link
            to="/instructor/add-course"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2  hover:bg-gray-600 hover:rounded-md ${
                pathname === "/instructor/add-course"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <BookPlus />
              <span className="tracking-[2px]">Add Course</span>
            </li>
          </Link>
          <Link
            to="/instructor/settings"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2  hover:bg-gray-600 hover:rounded-md ${
                pathname === "/instructor/settings"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <Settings />
              <span className="tracking-[2px]">Settings</span>
            </li>
          </Link>
        </ul>
        <div className="absolute bottom-6 px-2">
          <button
            onClick={logout}
            className=" text-white px-4 py-2 rounded-md  bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
