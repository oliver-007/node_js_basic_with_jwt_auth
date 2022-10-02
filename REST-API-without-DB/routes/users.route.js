// const express = require("express");
// const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.cotroller");

const router = require("express").Router();

// ***** get users
router.get("/", getUsers);

// **** create user
router.post("/", createUser);

// **** update user
router.put("/:_id", updateUser);

// **** delete user
router.delete("/:_id", deleteUser);

module.exports = router;
