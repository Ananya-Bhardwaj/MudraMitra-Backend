const mongoose=require('mongoose')
const URI="mongodb+srv://wehack:2402yana@cluster0.23x4kew.mongodb.net/index.js?retryWrites=true&w=majority"
//mongoose.connect(URI)
const connectDb=async()=>{
  try{
    await mongoose.connect(URI);
    console.log("connection");
  }catch(error){
    console.log("Database not connected properly");
    process.exit(0);
  }
};
module.exports=connectDb;