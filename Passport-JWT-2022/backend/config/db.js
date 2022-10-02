const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.DB_URL;

mongoose
  .connect(db_url)
  .then(() => {
    console.log("mongoDB is connected SUCCESSFULLY. ✔");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
