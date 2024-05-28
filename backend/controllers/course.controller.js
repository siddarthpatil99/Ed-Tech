import Course from "../models/course.model.js";
import { courseSchema } from "../zod/course.types.js";
import { User } from "../models/user.model.js";
import cloudinary from "../utils/cloudinary.js";

export const createCourse = async (req, res) => {
  const { title, description, videoUrl, thumbnail } = req.body;
  const instructorId = req.user.id;
  const file = req.files.thumbnail;

  try {
    console.log(req.file);
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "images",
    });
    const instructorName = req.user.name;

    req.body.instructorName = instructorName;

    console.log(req.body);
    const courseInput = courseSchema.safeParse(req.body);

    if (!courseInput.success) {
      return res
        .status(400)
        .json({ message: "Invalid inputs", error: courseInput.error });
    }

    const newCourse = await Course.create({
      title,
      description,
      instructorName,
      videoUrl,
      thumbnail: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      instructorId,
    });

    return res.status(201).json({
      message: "Course created successfully",
      course: newCourse,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to create course",
      error: error.message,
      success: false,
    });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    return res.status(200).json({
      message: "Course retrieved successfully",
      courses: courses,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve courses",
      error: error.message,
      success: false,
    });
  }
};

export const featuredCourses = async (req, res) => {
  try {
    const courses = await Course.find().select("title price thumbnail");

    return res.status(200).json({
      message: "Course retrived successfully",
      courses: courses,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve courses",
      error: error.message,
      success: false,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const instructorId = req.user.id;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the instructor is the owner of the course
    if (course.instructorId.toString() !== instructorId) {
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this course" });
    }

    await Course.findByIdAndDelete(courseId);

    console.log(courseId);
    console.log(instructorId);
    console.log(course);

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete course", error: error.message });
  }
};

export const getCourseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ course });
  } catch (error) {
    console.error("Error fetching course details: ", error);
    res.status(500).json({ message: "Server error" });
  }
};
