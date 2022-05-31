const db = require("../db");
const { createError } = require("../utils/error");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    const user = await db.query("select * from users where email=$1 ", [
      req.body.email,
    ]);
    if (!user.rowCount) return next(createError(404, "User not found"));
    const { rows } = user;

    const password = rows[0].password;

    const isPasswordCorrect = await bcrypt.compare(req.body.password, password);
    if (!isPasswordCorrect) {
      return next(createError("404", "Wrong password or username"));
    }

    const token = jwt.sign(
      {
        id: rows[0].id,
        isAdmin: rows[0].isAdmin,
      },
      process.env.JWT
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ status: "successfully create token", user: user.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
