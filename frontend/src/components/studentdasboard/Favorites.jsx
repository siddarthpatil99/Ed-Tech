import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const savedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
      } catch (error) {
        console.error("Failed to fetch favourites: ", error);
      } finally {
        setLoading(false);
      }
    }
    
    favorites()
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 mr-2" />
        <span>Loading...</span>
      </div>
    );
  }

  const toggleFavorite = (course) => {
    const isFavorite = favorites.some((fav) => fav._id === course._id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav._id !== course._id)
      : [...favorites, course];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    if (isFavorite) {
      toast.success("Removed from favourites");
    }
  };

  

  const handleViewCourse = (courseId) => {
    navigate(`/studentpage/course/${courseId}`);
  };

  return (
    <div className="bg-gray-900 py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">
          Favourite Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {favorites.length > 0 ? (
            favorites.map((course) => (
              <div
                key={course._id}
                className="bg-gray-800 p-3 rounded-lg shadow-lg border border-slate-700"
              >
                <div>
                  <img
                    src={course.thumbnail.url}
                    alt={course.title}
                    className="w-[100%] h-[60%] object-cover rounded-sm mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {course.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => toggleFavorite(course)}
                    className="text-red-500 text-2xl"
                  >
                    {favorites.some((fav) => fav._id === course._id) ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
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
            ))
          ) : (
            <p className="text-white">No favorite courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
