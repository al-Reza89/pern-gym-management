const express = require("express");
const {
  getInstructors,
  createInstructor,
  deleteInstructor,
  getInstructor,
  updateInstructor,
} = require("../controllers/instructor");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", getInstructors);
router.post("/", createInstructor);
router.delete("/:id", deleteInstructor);
router.get("/:id", getInstructor);
router.put("/:id", updateInstructor);

module.exports = router;
