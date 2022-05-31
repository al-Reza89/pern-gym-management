const db = require("../db");
const { createError } = require("../utils/error");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const results = await db.query(
      "INSERT INTO users  ( first_name,middle_name ,last_name ,email , password, gender ) VALUES( $1,$2,$3,$4,$5,$6) returning *",
      [
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.email,
        hash,
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

const login = async (req, res, next) => {
  try {
    const user = await db.query("select * from users where email=$1", [
      req.body.email,
    ]);
    if (!user.rowCount) return next(createError(404, "User not found"));

    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
