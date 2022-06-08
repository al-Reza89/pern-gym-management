const express = require("express");
const {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", getUsers);
router.delete("/:id", verifyAdmin, deleteUser);
router.get("/:id", verifyUser, getUser);
router.put("/:id", verifyUser, updateUser);

module.exports = router;
