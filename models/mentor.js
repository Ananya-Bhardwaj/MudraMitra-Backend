import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    /*Qualification: {
      type: String,
      required: false,
    },*/
    Specialization: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
    },
    Phoneno: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Mentor", MentorSchema);
