const express = require("express");
const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/user");

const router = express.Router();
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);

module.exports = router;
