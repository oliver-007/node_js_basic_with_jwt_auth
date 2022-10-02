const { v4: uuidv4 } = require("uuid");

const users = [
  {
    _id: uuidv4(),
    name: "name 1",
    email: "mail_1@gmail.com",
  },
];

module.exports = users;
