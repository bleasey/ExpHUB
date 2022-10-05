const mongoose = require('mongoose')
const Answer = require('./Answer')

const gyanSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  institution: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers:{
    type:[Answer]
  }
});

module.exports = mongoose.model('Gyan',gyanSchema);