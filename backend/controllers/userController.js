const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

//register Users

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add field ");
  }

  // ----------------------------------------------check that the user exist
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new error("User already exits");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  // adding hash in password
  const hashPassword = await bcrypt.hash(password, salt);
  // create User
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  

  if (user)
  {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email:user.email,
    })
  }
  else{
    res.status(400)
    throw new Error ('Invalid user data')
  }
});


//Login User

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login User" });
});

//getMe

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

//register Users

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
