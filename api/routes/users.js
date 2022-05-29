const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/user");

const router = express.Router();
router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);

module.exports = router;
