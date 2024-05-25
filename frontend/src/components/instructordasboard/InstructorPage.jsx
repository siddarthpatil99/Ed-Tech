import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
// import MyProfile from "./MyProfile";
// import ManageCourses from "./ManageCourses";

const InstructorPage = () => {
  
  return (
    <>
      <div className="flex h-screen">
        <div className="fixed w-64 h-full">
          <SideBar />
        </div>
        <div className="flex-1 ml-64 bg-gray-900 text-white p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default InstructorPage;
