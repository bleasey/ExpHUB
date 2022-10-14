const asyncHandler = require('express-async-handler')
const Gyan = require('../models/Gyan');
const mongoose = require('mongoose')

const getAllGyans = asyncHandler(async(req,res)=>{
    const gyans = await Gyan.find({})
      .populate(['category','user'])
      .populate({
        path:'answers',
        populate:{
          path:'question',
        }
      })
      .lean();
    if (gyans) res.status(200).json({ ...gyans });
    else throw new Error("Something went wrong!");
})

const getSingleGyan = asyncHandler(async(req,res)=>{
    if (!mongoose.isValidObjectId(req.params.id)) {
      res.status(400);
      throw new Error("Invalid Gyan Id");
    }
    const gyan = await Gyan.findById(req.params.id)
      .populate("category")
      .lean();
    if (gyan) res.status(200).json({ ...gyan });
    else {
      res.status(400);
      throw new Error("Something went wrong!");
    }
})

const addGyan = asyncHandler(async(req,res)=>{
    const { catId,answers} = req.body;
    const userId = mongoose.Types.ObjectId(req.user.id);
    const cat = mongoose.Types.ObjectId(catId);
    const gyan = await Gyan.create({
      category:cat,
      user:userId,
      answers
    });
    if (gyan) {
      res.status(201).json({...gyan._doc});
    } else {
      res.status(400);
      throw new Error("Invalid input fields");
    }
})

const updateGyan = asyncHandler(async(req,res)=>{
    const gyan = await Gyan.findById(req.params.id);
    if (gyan) {
      if (gyan.user != req.user.id || req.user.role!="ADMIN") {
        res.status(403);
        throw new Error("Only the author can update this gyan");
      }
      const updatedGyan = await Gyan.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          runValidators: true,
          new: true,
        }
      )
        .populate("category")
        .lean();
      res.status(200).json({ ...updatedGyan });
    } else {
      res.status(400);
      throw new Error("Invalid Gyan Id!");
    }
})

const deleteGyan = asyncHandler(async(req,res)=>{
    const gyan = await Gyan.findById(req.params.id);
    if (gyan) {
      if (gyan.author != req.user.id) {
        res.status(403);
        throw new Error("Only the author can update this gyan");
      }
      const deletedGyan = await Gyan.findByIdAndDelete(req.params.id).lean();
      res.status(200).json({ ...deletedGyan });
    } else {
      res.status(400);
      throw new Error("Invalid Gyan Id!");
    }
})

module.exports = {
    getAllGyans,
    getSingleGyan,
    addGyan,
    updateGyan,
    deleteGyan
}




