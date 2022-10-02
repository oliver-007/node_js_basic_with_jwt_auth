const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user.model");

const profile = (req, res) => {
  return res.status(200).send({
    success: true,
    user: {
      id: req.user._id,
      username: req.user.username,
    },
  });
};

const registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) return res.status(400).send("User is already exist !!");

    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      // Store hash in your password DB.
      const newUser = new User({
        username: req.body.username,
        password: hash,
      });
      await newUser
        .save()
        .then((user) => {
          res.send({
            success: true,
            message: "User is created Successfully.",
            user: {
              id: user._id,
              username: user.username,
            },
          });
        })
        .catch((error) => {
          res.send({
            success: false,
            message: "Failed to create !!",
            error: error,
          });
        });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: "User not found.",
    });
  }
  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send({
      success: false,
      message: "Incorrect password",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  return res.status(200).send({
    success: true,
    message: "User logged in Successfylly . 👍",
    token: "Bearer " + token,
  });
};

module.exports = { profile, registerUser, loginUser };
