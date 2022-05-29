const db = require("../db");

const getUsersInfo = async (req, res, next) => {
  try {
    const allusersInfo = await db.query("select * from users_info");
    res.status(200).json({
      status: "success",
      length: allusersInfo.rows.length,
      data: allusersInfo.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createUserInfo = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO users_info  ( member_id,package_id ,end_date ,instructor_id , status, start_date ) VALUES( $1,$2,$3,$4,$5,$6) returning *",
      [
        req.body.member_id,
        req.body.package_id,
        req.body.end_date,
        req.body.instructor_id,
        req.body.status,
        req.body.start_date,
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

const deleteUserInfo = async (req, res, next) => {
  try {
    const results = await db.query("delete from users_info where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const result = await db.query("select * from users_info where id=$1", [
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

const updateUserInfo = async (req, res, next) => {
  try {
    const results = await db.query(
      "update users_info set member_id=$1,package_id=$2,end_date=$3,start_date=$4,status=$5,instructor_id=$6 where id=$7 returning * ",
      [
        req.body.member_id,
        req.body.package_id,
        req.body.end_date,
        req.body.start_date,
        req.body.status,
        req.body.instructor_id,
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
  getUsersInfo,
  createUserInfo,
  deleteUserInfo,
  getUserInfo,
  updateUserInfo,
};
