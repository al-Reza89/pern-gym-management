const db = require("../db");
// const { createError } = require("../utils/error");

const getUsers = async (req, res, next) => {
  try {
    const allmembers = await db.query("select * from users");
    res.status(200).json({
      status: "success",
      length: allmembers.rows.length,
      data: allmembers.rows,
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const results = await db.query("delete from users where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await db.query("select * from users where id=$1  ", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const results = await db.query(
      "update users set first_name=$1,middle_name=$2,last_name=$3,gender=$4,password=$5,email=$6,joining_date=$7 where id=$8 returning * ",
      [
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.gender,
        req.body.password,
        req.body.email,
        req.body.joining_date,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  deleteUser,
  getUser,
  updateUser,
};
