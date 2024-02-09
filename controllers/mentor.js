import Mentor from "../models/mentor.js";
import User from "../models/user.js";

export const fetchMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.find({});
    res.status(200).json(mentor);
  } catch (error) {
    next(error);
  }
};

export const fetchMentorbyId = async (req, res, next) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ message: "mentor does not exist" });
    }
    res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};

export const addMentor = async (req, res, next) => {
  try {
    const newMentor = new Mentor(req.body);
    const addMentor = await newMentor.save();
    res.status(200).json(addMentor);
  } catch (e) {
    next(e);
  }
};

export const editMentor = async (req, res, next) => {
  const updatedMentor = await Mentor.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
  );
  res.status(200).json(updatedMentor);
};

export const deleteMentor = async (req, res, next) => {
  try {
    const deleteMentor = await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Mentor Removed! " });
  } catch (e) {
    next(e);
  }
  
};

