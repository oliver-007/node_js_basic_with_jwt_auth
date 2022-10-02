const { v4: uuidv4 } = require("uuid");
let users = require("../models/users.model");

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const _id = uuidv4();
  const userName = req.body.userName;
  const email = req.body.email;
  const newUser = {
    _id: _id,
    userName: userName,
    email: email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

const updateUser = (req, res) => {
  const seletedId = req.params._id;
  users
    .filter((user) => user._id === seletedId)
    .map((selectedUser) => {
      selectedUser.userName = req.body.userName;
      selectedUser.email = req.body.email;
    });

  res.status(202).json(users);
};

const deleteUser = (req, res) => {
  const seletedId = req.params._id;
  const updatedUser = users.filter((user) => user._id !== seletedId);
  users = updatedUser;
  res.status(203).json(users);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
