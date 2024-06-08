import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CircleUser, BookText, Settings, Heart } from "lucide-react";

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
      <div className="bg-gray-800 text-white w-64 p-4 h-full fixed top-0 left-0">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-blue-500 pr-1">Ed</span>-
          <span className="pl-1">Tech</span>
        </h2>
        <ul className="space-y-4 font-bold">
          <Link
            to="/student/profile"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2  hover:bg-gray-600 hover:rounded-md ${
                pathname === "/student/profile"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <CircleUser />
              <span className="tracking-[2px]">My Profile</span>
            </li>
          </Link>

          <Link
            to="/student/courses"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2 hover:bg-gray-600 hover:rounded-md ${
                pathname === "/student/courses"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <BookText />
              <span className="tracking-[2px]">Courses</span>
            </li>
          </Link>

          <Link
            to="/student/favourites"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2 hover:bg-gray-600 hover:rounded-md ${
                pathname === "/student/favourites"
                  ? "bg-gray-600 rounded-md"
                  : ""
              }`}
            >
              <Heart />

              <span className="tracking-[2px]">Favourites</span>
            </li>
          </Link>
          <Link
            to="/student/settings"
            className="block hover:cursor-pointer"
          >
            <li
              className={`flex px-2 py-4  items-center gap-x-2 hover:bg-gray-600 hover:rounded-md ${
                pathname === "/student/settings"
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
