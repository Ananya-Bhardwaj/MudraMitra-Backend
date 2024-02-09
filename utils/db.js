import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config(); 

const URI = process.env.MONGO;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error.message);
    console.log("Database not connected properly");
    process.exit(0);
  }
};

export default connectDb;
