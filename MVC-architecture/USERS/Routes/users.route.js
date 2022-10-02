const express = require("express");
const router = express.Router();
const {
  getHome,
  getUsers,
  saveUser,
} = require("../Controllers/users.controller");

router.get("/", getHome);

router.get("/users", getUsers);

router.post("/users", saveUser);

module.exports = router;
