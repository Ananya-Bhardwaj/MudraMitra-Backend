
import User from "../models/user.js";
//this is user registration
//This code checks for the user if he is already in the database 
//then it shows already existed otherwise adds the user
export const login  = async (req, res, next) => {
  try {
    const {name , email ,password}=req.body;
    // made some additions no deletions
    const userExist = await user.findOne({email});
    if(userExist){
      return res.status(400).json({msg:"Email already exists"});
    }
    const userCreated= await User.create({name , email ,password});
    // above this line
    res.status(200).json({msg:userCreated});
  } catch (error) {
    next(error);
  }
  
};


/*export const fetchUserbyId = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    if (!User) {
      return res.status(404).json({ message: "New User" });
    }
    res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};

export const addUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const addUser = await newUser.save();
    res.status(200).json(addUser);
  } catch (e) {
    next(e);
  }
};

export const editUser = async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
  );
  res.status(200).json(updatedUser);
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Removed! " });
  } catch (e) {
    next(e);
  }
};
*/
