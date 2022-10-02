const { v4: uuidv4 } = require("uuid");

let users = require("../models/users.model");

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;

  const newUser = {
    _id: uuidv4(),
    userName: userName,
    email: email,
  };

  users.push(newUser);

  res.status(201).json(users);
};

const updateUser = (req, res) => {
  const selectedId = req.params._id;
  const selectedUser = users.filter((user) => {
    return user._id === selectedId;
  });
  selectedUser[0].userName = req.body.userName;
  selectedUser[0].email = req.body.email;

  res.status(202).json(users);
};

const deleteUser = (req, res) => {
  const selectedId = req.params._id;
  const remainedUser = users.filter((user) => user._id !== selectedId);
  users = remainedUser;
  res.status(203).json(users);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
