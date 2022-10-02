const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const User = require("../models/users.model");

const register = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      return res.status(400).send("User already Exist !! 🚩");
    }

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
            message: "User Registed Successfully . ✔",
            user: {
              id: user._id,
              username: user.username,
              password: user.password,
            },
          });
        })
        .catch((error) => {
          res.send({
            success: false,
            message: "Failed to create !! 🚩",
            error: error,
          });
        });
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).send("User not found !! 🚩 ");
    }

    const comparePassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!comparePassword) {
      return res.status(401).send("Incorrect Password !!  🚩 ");
    }

    const jwtPayload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(jwtPayload, SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      success: true,
      message: "User logged in Successfully. ✔",
      id: user._id,
      username: user.username,
      token: "Bearer " + token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const profile = (req, res) => {
  res.status(200).send({
    user: {
      id: req.user._id,
      username: req.user.username,
    },
  });
};

module.exports = { register, login, profile };
