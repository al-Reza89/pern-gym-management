const express = require("express");
const {
  getPackages,
  createPackage,
  deletePackage,
  getPackage,
  updatePackage,
} = require("../controllers/package");

const router = express.Router();
router.get("/", getPackages);
router.post("/", createPackage);
router.delete("/:id", deletePackage);
router.get("/:id", getPackage);
router.put("/:id", updatePackage);

module.exports = router;
