const db = require("../db");

const getPayments = async (req, res, next) => {
  try {
    const allPayments = await db.query("select * from payments");
    res.status(200).json({
      status: "success",
      length: allPayments.rows.length,
      data: allPayments.rows,
    });
  } catch (err) {
    next(err);
  }
};

const createPayment = async (req, res, next) => {
  try {
    const results = await db.query(
      "INSERT INTO payments  ( amount, remarks, payment_type, date_created, member_id  ) VALUES( $1,$2,$3,$4,$5) returning *",
      [
        req.body.amount,
        req.body.remarks,
        req.body.payment_type,
        req.body.date_created,
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

const deletePayment = async (req, res, next) => {
  try {
    const results = await db.query("delete from payments where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(err);
  }
};

const getPayment = async (req, res, next) => {
  try {
    const result = await db.query("select * from payments where id=$1", [
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

const updatePayment = async (req, res, next) => {
  try {
    const results = await db.query(
      "update payments set amount=$1,remarks=$2,payment_type=$3,date_created=$4,member_id=$5 where id=$6 returning * ",
      [
        req.body.amount,
        req.body.remarks,
        req.body.payment_type,
        req.body.date_created,
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
  getPayments,
  createPayment,
  deletePayment,
  getPayment,
  updatePayment,
};
