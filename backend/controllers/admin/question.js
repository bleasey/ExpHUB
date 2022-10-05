const Question = require("../../models/Question");
const Category = require("../../models/Category");
const mongoose = require("mongoose");

const addQuestion = async (req, res) => {
  const { question, id } = req.body;
  const categoryId = mongoose.Types.ObjectId(id);
  const newQ = await Question.create({
    question,
    categoryId,
  });
  if (newQ) {
    res.status(201).json({ ...newQ._doc });
  } else res.status(400).json({ msg: "Something went wrong" });
};

const getQuestionsOfACategory = async (req, res) => {
  const catId = req.params.catId;
  const cat = await Category.findById(catId);
  if (cat) {
    const questions = await Question.find({
      categoryId: mongoose.Types.ObjectId(catId),
    });
    if (questions) res.status(200).json({ questions });
  } else res.status(404).json({ msg: "Category doesnot exist" });
};

const deleteQuestion = async (req, res) => {
  const { qId } = req.params;
  const question = await Question.findByIdAndDelete(qId);
  if (question) res.status(200).json({ ...question._doc });
  else res.status(400).json({ msg: "Question doesnot exist" });
};

module.exports = { addQuestion, getQuestionsOfACategory, deleteQuestion };
