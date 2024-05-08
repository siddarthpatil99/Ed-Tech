import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructorName: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "User",
    // required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, {timestamps: true}
);

const Course = mongoose.model("Course", courseSchema);

export default Course;