const express = require("express");
const {
  getInstructors,
  createInstructor,
  deleteInstructor,
  getInstructor,
  updateInstructor,
} = require("../controllers/instructor");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", verifyAdmin, getInstructors);
router.post("/", verifyAdmin, createInstructor);
router.delete("/:id", verifyAdmin, deleteInstructor);
router.get("/:id", verifyAdmin, getInstructor);
router.put("/:id", verifyAdmin, updateInstructor);

module.exports = router;
