import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_COURSES } from "../../apiConfig";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCourses = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
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

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteToggle = (course) => {
    let updatedFavorites;
    if (favorites.some(fav => fav._id === course._id)) {
      updatedFavorites = favorites.filter(fav => fav._id !== course._id);
    } else {
      updatedFavorites = [...favorites, course];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 mr-2" />
        <span>Loading...</span>
      </div>
    )
  }

  const handleViewCourse = (courseId) => {
    navigate(`/studentpage/course/${courseId}`);
  };

  const filteredCourses = courses.filter((courses) =>
    courses.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-900 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Courses</h1>
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
                className="bg-gray-800 p-3 rounded-lg shadow-lg"
              >
                <img
                  src={course.thumbnail.url}
                  alt={course.thumbnail}
                  className="w-11/12 h-47 object-cover rounded-sm mb-4"
                />
                <h3 className="text-lg font-semibold text-white">
                  {course.title}
                </h3>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleFavoriteToggle(course)}
                    className="text-2xl"
                  >
                    {favorites.some((fav) => fav._id === course._id) ? (
                      <AiFillHeart className="text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-white" />
                    )}
                  </button>
                  <button
                    // to={`/course/${course._id}`}
                    onClick={() => handleViewCourse(course._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
