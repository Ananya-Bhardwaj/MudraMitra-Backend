import { ObjectId } from "bson";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:{
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true,
  },
  modulesCompleted: [
    {
      module: {
        type: ObjectId, 
        ref: "Modules"
      }
    }
  ]
  
});

export default mongoose.model("User", UserSchema);
