import Modules from "../models/modules.js";
import User from "../models/user.js";

export const fetchModules = async (req, res, next) => {
  try {
    const modules = await Modules.find({});
    res.status(200).json(modules);
  } catch (error) {
    next(error);
  }
};

export const fetchModulebyId = async (req, res, next) => {
  const { id } = req.params;
  try {
    // if (!ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: "Invalid module ID" });
    // }
    const module = await Modules.findById(id);
    if (!module) {
      return res.status(404).json({ message: "Module not found" });
    }

    res.status(200).json(module); // Changed 'post' to 'module'
  } catch (e) {
    next(e);
  }
};

export const createModule = async (req, res, next) => {
  try {
    const newModule = new Modules(req.body);
    const savedModule = await newModule.save();
    res.status(200).json(savedModule);
  } catch (e) {
    next(e);
  }
};

export const editModule = async (req, res, next) => {
  const updatedModule = await Modules.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
  );
  res.status(200).json(updatedModule);
};

export const deleteModule = async (req, res, next) => {
  try {
    const deleteModule = await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully! " });
  } catch (e) {
    next(e);
  }
  
};
