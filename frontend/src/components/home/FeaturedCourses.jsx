import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FEATURED_COURSES } from '../../apiConfig';

const FeaturedCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(FEATURED_COURSES);
                setCourses(response.data.courses.slice(0, 4));
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching courses: ", error);
            }
        };

        fetchCourses();
    }, []);

  return (
    <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-white mb-6">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <div key={course._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <img src={course.thumbnail.url} alt={course.title} className="w-full h-48 object-cover rounded-sm mb-4" />
                        <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                        {/* <p className="text-gray-400">${course.price}</p> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default FeaturedCourses
