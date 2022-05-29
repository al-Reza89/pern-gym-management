const db = require("../db");

const getPackages = async (req, res, next) => {
  try {
    const allPackages = await db.query("select * from packages");
    res.status(200).json({
      status: "success",
      length: allPackages.rows.length,
      data: allPackages.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createPackage = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO packages  ( package, descriptions,amount ,member_id) VALUES( $1,$2,$3,$4) returning *",
      [
        req.body.package,
        req.body.descriptions,
        req.body.amount,
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

const deletePackage = async (req, res, next) => {
  try {
    const results = await db.query("delete from packages where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getPackage = async (req, res, next) => {
  try {
    const result = await db.query("select * from packages where id=$1", [
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

const updatePackage = async (req, res, next) => {
  try {
    const results = await db.query(
      "update packages set package=$1,descriptions=$2,amount=$3,member_id=$4 where id=$5 returning * ",
      [
        req.body.package,
        req.body.descriptions,
        req.body.amount,
        req.body.member_id,
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
  getPackages,
  createPackage,
  deletePackage,
  getPackage,
  updatePackage,
};
