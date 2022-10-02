const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DB_URL;

mongoose
  .connect(db_url)
  .then(() => {
    console.log("MongoDB is connected Successfully. ✔");
  })
  .catch((err) => {
    console.log(err);
  });
