const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

const homeRouter = require("./routes/home.route");
const userRouter = require("./routes/users.route");

require("dotenv").config();
require("./config/db");
require("./config/passport");

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.get("/", homeRouter);

app.use("/api/users", userRouter);

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/views/error.html`);
});

app.use((err, req, res, next) => {
  res.status(500).send("<h1> Server ERROR !!  </h1>");
});

module.exports = app;
