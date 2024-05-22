import { useState } from "react";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Signin from "./components/auth/Signin";
import StudentPage from "./components/studentdasboard/StudentPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import InstructorPage from "./components/instructordasboard/InstructorPage";
import Home from "./components/home/Home";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import MyProfile from "./components/instructordasboard/MyProfile";
import ManageCourses from "./components/instructordasboard/ManageCourses";
import AddCourse from "./components/instructordasboard/AddCourse";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/instructorpage/*" element={<InstructorPage />} >
              <Route path="profile" element={<MyProfile />} />
              <Route path="manage-courses" element={<ManageCourses />} />
              <Route path="add-course" element={<AddCourse />} />
            </Route>
            <Route path="/studentpage" element={<StudentPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
