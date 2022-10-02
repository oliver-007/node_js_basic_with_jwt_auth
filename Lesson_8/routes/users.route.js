const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is get req from home route");
});
router.get("/register", (req, res) => {
  res.send("this is get req from REGISTER route");
});
router.get("/login", (req, res) => {
  res.send("this is get req from LOGIN route");
});

module.exports = router;
