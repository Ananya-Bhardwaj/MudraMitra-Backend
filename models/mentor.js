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
    Age:{
      type:Number,
      required:true,
    },
    Phoneno:{
       type:Number,
      required:true,
    },

   email:{
     type:string,
     required:true,
   },
    experience:{
      type:string,
      required:true
    },
  },
  { timestamps: true },
);

export default mongoose.model("Mentor", MentorSchema);
