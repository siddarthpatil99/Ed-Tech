import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_COURSES } from "../../apiConfig";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(GET_COURSES);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleViewCourse = (courseId) => {
    navigate(`/studentpage/course/${courseId}`);
  };

  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">
            Available Courses
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <img
                  src={course.thumbnail.url}
                  alt={course.thumbnail}
                  className="w-11/12 h-47 object-cover rounded-sm mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>
                {/* <p>Instructor:</p> */}
                {/* <p className="text-gray-400">{course.description}</p> */}
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleViewCourse(course._id)}
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;