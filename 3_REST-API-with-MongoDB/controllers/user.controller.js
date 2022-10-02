const { v4: uuidv4 } = require("uuid");

const User = require("../models/users.model");

const getUsers = async (req, res) => {
  try {
    const alluser = await User.find();
    res.status(200).json(alluser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const selectedUser = await User.findOne({ id: req.params.id });
    res.status(200).json(selectedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const selectedUser = await User.findOne({ id: req.params.id });
    selectedUser.name = req.body.name;
    selectedUser.age = Number(req.body.age);
    await selectedUser.save();
    res.status(202).json(selectedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const selectedUser = await User.findOne({ id: req.params.id });
    await User.deleteOne({ id: req.params.id });
    res.status(203).json({
      message: `${selectedUser.name} is deleted.`,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUsers, getOneUser, createUser, updateUser, deleteUser };
