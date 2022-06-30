const express = require("express");
const {
  getAdmins,
  createAdmin,
  deleteAdmin,
  getAdmin,
  updateAdmin,
} = require("../controllers/admin");

const router = express.Router();
router.get("/", getAdmins);
router.post("/", createAdmin);
router.delete("/:id", deleteAdmin);
router.get("/:id", getAdmin);
router.put("/:id", updateAdmin);

module.exports = router;
