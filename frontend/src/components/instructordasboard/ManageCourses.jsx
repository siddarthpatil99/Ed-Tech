import axios from "axios";
import React, { useEffect, useState } from "react";
import { DELETE_COURSES, GET_COURSES } from "../../apiConfig";
import { FaSpinner, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const instructorId = localStorage.getItem("instructorId");

  useEffect(() => {
    const getCourses = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(GET_COURSES);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, [instructorId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 mr-2" />
        <span>Loading...</span>
      </div>
    );
  }

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`${DELETE_COURSES}/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("lms-token")}`,
        },
      });
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );
      toast.success("Course deleted successfully!");
    } catch (error) {
      console.error("Error deleting course: ", error);
      toast.error("Failed to delete course");
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Manage Courses</h1>
          <input
            type="text"
            placeholder="Search courses"
            className="px-4 py-2 rounded-md text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-800 p-3 rounded-lg shadow-lg border border-slate-700 cursor-pointer"
            >
              <img
                src={course.thumbnail.url}
                alt={course.thumbnail}
                className="w-[100%] h-[80%] object-cover rounded-sm mb-4"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-md font-semibold text-white">
                  {course.title}
                </h3>
                {/* Render delete icon only if the course belongs to the logged-in instructor */}
                {localStorage.getItem("instructorId") ===
                  course.instructorId && (
                  <FaTrash
                    onClick={() => handleDeleteCourse(course._id)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
