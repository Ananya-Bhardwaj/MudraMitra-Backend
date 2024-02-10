import mongoose from "mongoose";
const MentorSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Img: {
      type: String, 
      required: true, 
    },
    Specialization: {
      type: String,
      required: true,
    },
    Description: {
      type: String, 
    },
    Age: {
      type: Number,
    },
    Phoneno: {
      type: Number,
    },
    email: {
      type: String,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export default mongoose.model("Mentor", MentorSchema);
