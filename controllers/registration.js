import User from "../models/user.js";
const register=async (req , res)=>{
  try{
    const {email , password}=req.body;
    const userExist= await User.findone({ email });
    console.log(userExist);
    if(!userExist){
      return res.status(400).json({message :"Invalid Credentials"});
    }
    if(user){
      req.status(200).json({
        msg:"registration successful",
        
      });
      else{
      res.status(401).json({message : "Invalid email or password"})
    }
    }
    }catch(error){
    res.status(500).json("internal server error");
  }
  
}
module.exports={'register'}
