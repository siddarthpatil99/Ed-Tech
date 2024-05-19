import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import FeaturedCourses from "./FeaturedCourses";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <Footer />
    </>
  );
};

export default Home;
