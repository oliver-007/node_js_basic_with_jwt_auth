const router = require("express").Router();
const passport = require("passport");
const {
  profile,
  registerUser,
  loginUser,
} = require("../controllers/users.controller");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  profile
);

module.exports = router;
