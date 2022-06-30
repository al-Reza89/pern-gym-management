const db = require("../db");

const getWorkoutPlans = async (req, res, next) => {
  try {
    const allPlan = await db.query("select * from workoutPlan");
    res.status(200).json({
      status: "success",
      length: allPlan.rows.length,
      data: allPlan.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createWorkoutPlan = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO workoutPlan  ( member_id, instructor_id,workout_time ,details ) VALUES( $1,$2,$3,$4) returning *",
      [
        req.body.member_id,
        req.body.instructor_id,
        req.body.workout_time,
        req.body.details,
      ]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const deleteWorkoutPlan = async (req, res, next) => {
  try {
    const results = await db.query("delete from workoutPlan where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getWorkoutPlan = async (req, res, next) => {
  try {
    const result = await db.query("select * from workoutPlan where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const updateWorkoutPlan = async (req, res, next) => {
  try {
    const results = await db.query(
      "update workoutPlan set member_id=$1,instructor_id=$2,workout_time=$3,details=$4 where id=$5 returning * ",
      [
        req.body.member_id,
        req.body.instructor_id,
        req.body.workout_time,
        req.body.details,

        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWorkoutPlans,
  createWorkoutPlan,
  deleteWorkoutPlan,
  getWorkoutPlan,
  updateWorkoutPlan,
};
