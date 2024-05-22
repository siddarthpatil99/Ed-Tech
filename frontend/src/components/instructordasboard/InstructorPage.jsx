import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
// import MyProfile from "./MyProfile";
// import ManageCourses from "./ManageCourses";

const InstructorPage = () => {
  
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        {/* <div className="bg-gray-900 text-white flex-1 p-6">
          <Routes>
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/manage-courses" element={<ManageCourses />} />
            <Route path="/settings" element={<div>Settings Component</div>} />
            <Route path="*" element={<Navigate to="/instructorpage/profile" />} />
          </Routes>
        </div> */}
        <div className="bg-gray-900 text-white flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default InstructorPage;
