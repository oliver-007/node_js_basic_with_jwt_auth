const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("express");

const usersRouter = require("./routes/users.route");

app.use(cors());

// ****** built in body parser ****
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

// ****** getting users data
app.use("/users", usersRouter);

// **** route error ****
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found ! ",
  });
});

// **** server error ****
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server ERROR !",
  });
  next();
});

module.exports = app;
