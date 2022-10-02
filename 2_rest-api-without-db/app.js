const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routes/users.route");

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/users.html`);
});

app.use("/users", userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "404 ! route not found.",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "server ERROR !",
  });
});

module.exports = app;
