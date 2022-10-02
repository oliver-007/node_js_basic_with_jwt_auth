const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");

const userRouter = require("./routes/users.route");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(passport.initialize());

require("dotenv").config();
require("./config/db");
require("./config/passport");

app.get("/", (req, res) => {
  res.status(200).send("Welcome to server.");
});

app.use("/api/users", userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "server ERROR !!",
  });
});

module.exports = app;
