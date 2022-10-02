const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.cotroller");

const router = require("express").Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;
