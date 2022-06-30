const db = require("../db");

const getInstructors = async (req, res, next) => {
  try {
    const allInstructors = await db.query("select * from instructors");
    res.status(200).json({
      status: "success",
      length: allInstructors.rows.length,
      data: allInstructors.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createInstructor = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO instructors  ( instructor_name,instructor_email ,instructor_address ,member_id  ) VALUES( $1,$2,$3,$4) returning *",
      [
        req.body.instructor_name,
        req.body.instructor_email,
        req.body.instructor_address,
        req.body.member_id,
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

const deleteInstructor = async (req, res, next) => {
  try {
    const results = await db.query("delete from instructors where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getInstructor = async (req, res, next) => {
  try {
    const result = await db.query("select * from instructors where id=$1", [
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

const updateInstructor = async (req, res, next) => {
  try {
    const results = await db.query(
      "update instructors set instructor_name=$1,instructor_email=$2,instructor_address=$3,member_id=$4 where id=$5 returning * ",
      [
        req.body.instructor_name,
        req.body.instructor_email,
        req.body.instructor_address,
        req.body.member_id,

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
  getInstructors,
  createInstructor,
  deleteInstructor,
  getInstructor,
  updateInstructor,
};
