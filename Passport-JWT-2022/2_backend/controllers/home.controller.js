const path = require("path");

const home = (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}/../views/home.html`));
};

module.exports = home;
