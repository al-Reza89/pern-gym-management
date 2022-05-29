const db = require("../db");
// const { createError } = require("../utils/error");

const getUsers = async (req, res, next) => {
  try {
    const allmembers = await db.query("select * from members_signup");
    res.status(200).json({
      status: "success",
      length: allmembers.rows.length,
      data: allmembers.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  // const failed = true;
  // if (failed) return next(createError("401", "from create error"));

  try {
    const results = await db.query(
      "INSERT INTO members_signup  ( first_name,middle_name ,last_name ,email , password, gender ) VALUES( $1,$2,$3,$4,$5,$6) returning *",
      [
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.email,
        req.body.password,
        req.body.gender,
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

module.exports = {
  getUsers,
  createUser,
};
