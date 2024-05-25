import React, { useEffect, useState } from "react";
import axios from "axios";
import { FEATURED_COURSES } from "../../apiConfig";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(FEATURED_COURSES);
        const shuffledCourses = shuffle(response.data.courses);
        const randomCourses = shuffledCourses.slice(0, 3);
        setCourses(randomCourses);
        // setCourses(response.data.courses.slice(0, 3));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <img
                src={course.thumbnail.url}
                alt={course.title}
                className="w-full h-48 object-cover rounded-sm mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                {course.title}
              </h3>
              {/* <p className="text-gray-400">${course.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
