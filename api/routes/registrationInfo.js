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
router.get("/", getUsersInfo);
router.post("/", createUserInfo);
router.delete("/:id", deleteUserInfo);
router.get("/:id", getUserInfo);
router.put("/:id", updateUserInfo);

module.exports = router;
