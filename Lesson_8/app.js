const express = require("express");
const app = express();

const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  res.status(200);
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res) => {
  //   res.cookie("name", "oliver");
  //   res.cookie("age", "32");
  //   res.clearCookie("age");
  //   res.clearCookie("name");
  res.header("id", "123456");
  res.status(201);
  res.sendFile(`${__dirname}/views/login.html`);
});

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use((req, res) => {
  res.send("<h1> 404! not a valid url </h1>");
});

module.exports = app;
