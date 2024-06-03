import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import userRouter from "./routes/user.route.js";
import courseRouter from "./routes/course.route.js";
import fileUpload from "express-fileupload";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(fileUpload());
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// app.post('/upload', (req, res) =>{
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send("No files were uploaded.");
//     }
//     const uploadedFile = req.files.myFile;
//     res.send("File uploaded!");
// })

app.get("/", (req, res) => {
  res.send("All good");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Running on port " + process.env.PORT);
});
