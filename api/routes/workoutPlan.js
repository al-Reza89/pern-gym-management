const express = require("express");
const {
  getWorkoutPlans,
  createWorkoutPlan,
  deleteWorkoutPlan,
  getWorkoutPlan,
  updateWorkoutPlan,
} = require("../controllers/workoutPlan");

const router = express.Router();
router.get("/", getWorkoutPlans);
router.post("/", createWorkoutPlan);
router.delete("/:id", deleteWorkoutPlan);
router.get("/:id", getWorkoutPlan);
router.put("/:id", updateWorkoutPlan);

module.exports = router;
