import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideBar from "../studentdasboard/SideBar";

const StudentPage = () => {
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

export default StudentPage;
