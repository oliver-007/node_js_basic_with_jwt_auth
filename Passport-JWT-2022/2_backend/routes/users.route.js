const passport = require("passport");

const { register, login, profile } = require("../controllers/users.controller");

const userRouter = require("express").Router();

userRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profile
);

userRouter.post("/register", register);

userRouter.post("/login", login);

module.exports = userRouter;
