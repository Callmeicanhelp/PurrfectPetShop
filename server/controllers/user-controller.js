// Some code taken from Gary's repo
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const bcrypt = require("bcrypt");
const connection = require("../config/connection");

require("dotenv").config();

const newUser = async (req, res) => {
  try {
    const createUser = await User.create(req.body);
    res.status(200).json(createUser);
  } catch (err) {
    res.status(400).json({ message: "unable to create new user" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({ result: "success", payload: allUsers });
  } catch (err) {
    res.status(400).json({ message: "Cannot find users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.status(200).json({ result: "success", payload: singleUser });
  } catch (err) {
    res
      .status(400)
      .json({ result: "failed", message: "Cannot find user with that id" });
  }
};

const authLogin = async (req, res) => {
  const foundEmail = await User.findOne({ email: req.body.email });
  if (!foundEmail)
    return res.status(401).json({ message: "Invalid email or password." });

  const pwValid = await bcrypt.compare(req.body.password, foundEmail.password);
  if (!pwValid)
    return res.status(401).json({ message: "Invalid email or password." });

  const { pw, ...modifiedUser } = foundEmail;
  const token = jwt.sign(
    { _id: foundEmail._id, email: foundEmail.email },
    process.env.JWT_SECRET
  );

  res
    .status(200)
    .set({ "auth-token": token })
    .json({ result: "success", user: modifiedUser, token: token });
};

const lookupUserByToken = async (req, res) => {
  if (!req.headers || !req.headers.cookie)
    return res.status(401).json({ msg: "un-authorized" });

  // The node package named cookie will parse cookies for us
  const cookies = cookie.parse(req.headers.cookie);

  const token = cookies["auth-token"];

  if (!token) return res.status(401).json({ msg: "un-authorized" });

  const isVerified = jwt.verify(token, process.env.JWT_SECRET);
  if (!isVerified) return res.status(401).json({ msg: "un-authorized" });

  const user = await User.findById(isVerified._id);
  if (!user) return res.status(401).json({ msg: "un-authorized" });

  return res
    .status(200)
    .json({ result: "success", payload: { _id: user._id, email: user.email } });
};

module.exports = {
  newUser,
  getAllUsers,
  getUserById,
  authLogin,
  lookupUserByToken,
};
