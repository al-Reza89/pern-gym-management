const db = require("../db");

const getAdmins = async (req, res, next) => {
  try {
    const allAdmins = await db.query("select * from admin");
    res.status(200).json({
      status: "success",
      length: allAdmins.rows.length,
      data: allAdmins.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createAdmin = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO admin  ( admin_name,admin_email ,admin_password  ) VALUES( $1,$2,$3) returning *",
      [req.body.admin_name, req.body.admin_email, req.body.admin_password]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    const results = await db.query("delete from admin where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getAdmin = async (req, res, next) => {
  try {
    const result = await db.query("select * from admin where id=$1", [
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

const updateAdmin = async (req, res, next) => {
  try {
    const results = await db.query(
      "update admin set admin_name=$1,admin_email=$2,admin_password=$3 where id=$4 returning * ",
      [
        req.body.admin_name,
        req.body.admin_email,
        req.body.admin_password,

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
  getAdmins,
  createAdmin,
  deleteAdmin,
  getAdmin,
  updateAdmin,
};
