import React, { useState } from "react";
import axios from "axios";
import { CREATE_COURSE } from "../../apiConfig";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    // thumbnailUrl: "",
    videoUrl: "",
  });

  const [thumbnail, setThumbnail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleThumnbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithFile = new FormData();
      formDataWithFile.append("title", formData.title);
      formDataWithFile.append("description", formData.description);
      formDataWithFile.append("videoUrl", formData.videoUrl);
      formDataWithFile.append("thumbnail", thumbnail)

      // Send POST request to backend API
      await axios.post(CREATE_COURSE, formDataWithFile, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("lms-token"),
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle success (e.g., display success message)
      console.log("Course added successfully!");
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Error adding course: ", error);
    }
    // Reset form fields after submission
    setFormData({
      title: "",
      description: "",
      //   thumbnail: "",
      videoUrl: "",
    });
    setThumbnail(null);
  };

  return (
    <div className="w-full h-full bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <label
            htmlFor="description"
            className="block mt-2 mb-2 text-sm font-bold"
          >
            Course Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <label
            htmlFor="thumbnail"
            className="block mt-2 mb-2 text-sm font-bold"
          >
            Thumbnail (PNG or JPG)
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/png, image/jpeg"
            onChange={handleThumnbnailChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <label
            htmlFor="videoUrl"
            className="block mt-2 mb-2 text-sm font-bold"
          >
            VideoUrl
          </label>
          <input
            type="text"
            id="videoUrl"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
