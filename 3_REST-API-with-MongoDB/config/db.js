const mongoose = require("mongoose");
const config = require("../config/cosfig");

const dbUrl = config.db.url;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("mongoDB Atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
