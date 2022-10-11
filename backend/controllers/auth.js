const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password,roll } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Input fields missing");
  }
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    roll
  });
  const token = generateToken({
    id: newUser._id,
    name: newUser.name,
    role:newUser.role
  });
  if (newUser) {
    res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      roll: newUser.roll,
      role: newUser.role,
      isPlaced:newUser.isPlaced,
      isIntern: newUser.isIntern,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Input fields missing");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken({
      id: user._id,
      name: user.name,
      role:user.role
    });
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      roll: user.roll,
      role: user.role,
      isPlaced: user.isPlaced,
      isIntern: user.isIntern,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

const getUser = (req, res) => {
  res.status(200).json(req.user);
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
