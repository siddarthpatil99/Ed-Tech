import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideBar from "../studentdasboard/SideBar";

const StudentPage = () => {
 

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <SideBar />
        <div className="bg-gray-900 text-white flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudentPage;
