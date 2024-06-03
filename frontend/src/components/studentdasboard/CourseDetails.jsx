import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_COURSE_DETAILS } from "../../apiConfig";
import YouTube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const getYouTubeVideoId = (url) => {
    const videoIdRegex = /(?:\/|v=)([a-zA-Z0-9_-]{11})(?:\?|&|$)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await axios.get(`${GET_COURSE_DETAILS}/${id}`);
        console.log("API Response: ", response);
        setCourse(response.data.course);
        console.log("Video URL: ", response.data.course.videoUrl);
      } catch (error) {
        console.error("Error fetching course details: ", error);
      } finally {
        setLoading(false);
      }
    };
    getCourseDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Error loading course details.</div>;
  }

  // const aspectRatio = 16 / 9; // Example aspect ratio (width / height)

  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">{course.title}</h1>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex">
              <YouTube videoId={getYouTubeVideoId(course.videoUrl)} />
              <p className="text-white-900 ml-6 text-justify">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
