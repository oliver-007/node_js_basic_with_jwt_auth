const { v4: uuidv4 } = require("uuid");

const users = [
  {
    _id: uuidv4(),
    userName: "Name 1",
    email: "mail1@gmail.com",
  },
];

module.exports = users;
