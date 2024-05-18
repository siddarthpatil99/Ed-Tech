import Course from "../models/course.model.js";
import { courseSchema } from "../zod/course.types.js";
import { User } from "../models/user.model.js";

export const createCourse = async (req, res) => {
  const { title, description, category, price, videoUrl, thumbnailUrl } =
    req.body;

  try {
    const instructorName = req.user.name;

    req.body.instructorName = instructorName;

    console.log(req.body);
    const courseInput = courseSchema.safeParse(req.body);

    if (!courseInput.success) {
      return res
        .status(400)
        .json({ message: "Invalid inputs", error: courseInput.error });
    }

    // const userId = req.userId;
    // if (!userId) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }

    // const instructor = await User.findById(userId);
    // if (!instructor) {
    //   return res.status(404).json({ message: "Instructor not found" });
    // }

    const newCourse = await Course.create({
      title,
      description,
      instructorName,
      category,
      price,
      videoUrl,
      thumbnailUrl
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

    return res.status(200).json({message: "Course retrieved successfully", courses: courses, success: true});
  } catch (error) {
    return res.status(500).json({message: "Failed to retrieve courses", error: error.message, success: false});
  }
}