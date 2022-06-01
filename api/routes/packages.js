const express = require("express");
const {
  getPackages,
  createPackage,
  deletePackage,
  getPackage,
  updatePackage,
} = require("../controllers/package");
const { verifyAdmin, verifyToken } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", verifyToken, getPackages);
router.post("/", verifyAdmin, createPackage);
router.delete("/:id", verifyAdmin, deletePackage);
router.get("/:id", verifyAdmin, getPackage);
router.put("/:id", verifyAdmin, updatePackage);

module.exports = router;
