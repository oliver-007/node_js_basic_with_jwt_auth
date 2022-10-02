const path = require("path");
const users = require("../Models/users.model");

exports.getHome = (req, res) => {
  res.status(200).json({
    message: "All OK, go to users route 😀 ",
  });
};

exports.getUsers = (req, res) => {
  res.status(200).sendFile(path.join(`${__dirname}/../Views/users.html`));
};

exports.saveUser = (req, res) => {
  const name = req.body.clientName;
  const age = Number(req.body.clientAge);

  users.push({ name: name, age: age });
  res.status(200).json({
    success: true,
    users,
  });
};
