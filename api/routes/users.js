const express = require("express");
const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/user");
const { verifyUser } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", verifyUser, getUser);
router.put("/:id", updateUser);

module.exports = router;
