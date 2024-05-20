import { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import StudentPage from "./components/StudentPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import InstructorPage from "./components/InstructorPage";
import Home from "./components/home/Home";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";

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
          {/* <Route path="/studentpage" element={<StudentPage />} /> */}
          {/* <Route path="/instructorpage" element={<InstructorPage />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/instructorpage" element={<InstructorPage />} />
            <Route path="/studentpage" element={<StudentPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
