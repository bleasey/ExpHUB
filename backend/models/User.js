const mongoose = require('mongoose');
const ROLES = require('../config/roles')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
  },
  yearOfPassing:{
    type:String
  },
  branch:{
    type:String,
    enum:['CS','AI','IT','EE','EC','ME','MT','CH','CV','MI']
  },
  role: {
    type: String,
    enum: [ROLES.ADMIN, ROLES.USER, ROLES.ICO, ROLES.PCO],
    default: ROLES.USER,
  },
  status:{
    type:String,
    enum:['placed','interned','none'],
    default:'none'
  },
  avatar:{
    type:String,
  }
});

module.exports = mongoose.model('User', userSchema);