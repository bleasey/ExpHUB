const asyncHandler = require("express-async-handler");
const User = require("../../models/User");
const ROLES = require("../../config/roles");
const mongoose = require("mongoose");

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({ role: { $ne: ROLES.ADMIN } }).lean();
  if (users) res.status(200).json({ users });
  else throw new Error("Something went wrong!");
});
const getSingleUser = asyncHandler(async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400);
    throw new Error("Invalid User Id");
  }
  const user = await User.findById(req.params.id).lean();
  if (user) res.status(200).json({ ...user });
  else {
    res.status(400);
    throw new Error("Something went wrong!");
  }
});
const updateUser = asyncHandler(async (req, res) => {
     if (!mongoose.isValidObjectId(req.params.id)) {
       res.status(400);
       throw new Error("Invalid User Id");
     }
     const updatedUser = User.findByIdAndUpdate(req.params.id,req.body,{
        runValidators:true,
        new:true
     }).lean()
     res.status(200).json({...updatedUser})
});


module.exports = { getAllUsers, getSingleUser,updateUser };
