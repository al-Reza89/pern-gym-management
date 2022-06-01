const express = require("express");
const {
  getWorkoutPlans,
  createWorkoutPlan,
  deleteWorkoutPlan,
  getWorkoutPlan,
  updateWorkoutPlan,
} = require("../controllers/workoutPlan");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const router = express.Router();
router.get("/", verifyAdmin, getWorkoutPlans);
router.post("/", verifyAdmin, createWorkoutPlan);
router.delete("/:id", verifyUser, deleteWorkoutPlan);
router.get("/:id", verifyUser, getWorkoutPlan);
router.put("/:id", verifyUser, updateWorkoutPlan);

module.exports = router;
