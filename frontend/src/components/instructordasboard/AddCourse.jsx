import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnailUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend API
      await axios.post("YOUR_BACKEND_ENDPOINT", formData);
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
      price: "",
      thumbnailUrl: "",
      videoUrl: "",
    });
  };

  return (
    <div className="container mx-auto px-4">
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
          <label htmlFor="title" className="block mt-2 mb-2 text-sm font-bold">
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
          <label htmlFor="title" className="block mt-2 mb-2 text-sm font-bold">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <label htmlFor="title" className="block mt-2 mb-2 text-sm font-bold">
            ThumbnailUrl
          </label>
          <input
            type="text"
            id="thumbnailUrl"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
            required
          />
          <label htmlFor="title" className="block mt-2 mb-2 text-sm font-bold">
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
        {/* Repeat similar structure for other form fields */}
        {/* Description */}
        {/* Price */}
        {/* Thumbnail URL */}
        {/* Video URL */}
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
