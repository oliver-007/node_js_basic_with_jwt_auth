const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("express");

const userRouter = require("./routes/users.route");

require("./config/db");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/index.html`);
});

app.use("/api/users", userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "404 ! Route not found.",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "server ERROR !",
  });
});

module.exports = app;
