const express = require("express");
const {
  getUsersInfo,
  createUserInfo,
  deleteUserInfo,
  getUserInfo,
  updateUserInfo,
} = require("../controllers/registrationInfo");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", verifyAdmin, getUsersInfo);
router.post("/", verifyAdmin, createUserInfo);
router.delete("/:id", verifyAdmin, deleteUserInfo);
router.get("/:id", verifyAdmin, getUserInfo);
router.put("/:id", verifyAdmin, updateUserInfo);

module.exports = router;
