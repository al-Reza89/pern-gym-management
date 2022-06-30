require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// -----------member table----------------------------

// get all members
app.get("/api/v1/members", async (req, res) => {
  try {
    const allmembers = await db.query("select * from members");
    res.status(200).json({
      status: "success",
      length: allmembers.rows.length,
      data: allmembers.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// create a member
app.post("/api/v1/members", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO  members ( member_id, firstname, middlename, lastname, gender, contact, address, email, date_created) VALUES( $1,$2,$3,$4,$5,$6,$7,$8,$9) returning *",
      [
        req.body.member_id,
        req.body.firstname,
        req.body.middlename,
        req.body.lastname,
        req.body.gender,
        req.body.contact,
        req.body.address,
        req.body.email,
        req.body.date_created,
      ]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//delete members
app.delete("/api/v1/members/:id", async (req, res) => {
  try {
    const results = await db.query("delete from members where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// get a member
app.get("/api/v1/members/:id", async (req, res) => {
  try {
    const result = await db.query("select * from members where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// update a member
app.put("/api/v1/members/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update members set member_id=$1,firstname=$2,middlename=$3,lastname=$4,gender=$5,contact=$6,address=$7,email=$8,date_created=$9 where id=$10 returning * ",
      [
        req.body.member_id,
        req.body.firstname,
        req.body.middlename,
        req.body.lastname,
        req.body.gender,
        req.body.contact,
        req.body.address,
        req.body.email,
        req.body.date_created,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});

//packages tables--------------------------------------

// get all package
app.get("/api/v1/packages", async (req, res) => {
  try {
    const allpackages = await db.query("select * from packages");
    res.status(200).json({
      status: "success",
      length: allpackages.rows.length,
      data: allpackages.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// create packages
app.post("/api/v1/packages", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO  packages (package, descriptions,amount) VALUES( $1,$2,$3) returning *",
      [req.body.package, req.body.descriptions, req.body.amount]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// delete packages
app.delete("/api/v1/packages/:id", async (req, res) => {
  try {
    const results = await db.query("delete from packages where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});
//get a package
app.get("/api/v1/packages/:id", async (req, res) => {
  try {
    const result = await db.query("select * from packages where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// update packages
app.put("/api/v1/packages/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update packages set package=$1,descriptions=$2,amount=$3 where id = $4 returning * ",
      [req.body.package, req.body.descriptions, req.body.amount, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});

// payment table ----------------------------------------------------------

//get all payments
app.get("/api/v1/payments", async (req, res) => {
  try {
    const allpayments = await db.query("select * from payments");
    res.status(200).json({
      status: "success",
      length: allpayments.rows.length,
      data: allpayments.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//create-payments
app.post("/api/v1/payments", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO  payments (registration_id,amount,remarks,payment_type) VALUES( $1,$2,$3,$4) returning *",
      [
        req.body.registration_id,
        req.body.amount,
        req.body.remarks,
        req.body.payment_type,
      ]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// delete payment
app.delete("/api/v1/payments/:id", async (req, res) => {
  try {
    const results = await db.query("delete from payments where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// get a payment
app.get("/api/v1/payments/:id", async (req, res) => {
  try {
    const result = await db.query("select * from payments where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});
//update a payment
app.put("/api/v1/payments/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update payments set registration_id=$1,amount=$2,remarks=$3,payment_type=$4 where id = $5 returning * ",
      [
        req.body.registration_id,
        req.body.amount,
        req.body.remarks,
        req.body.payment_type,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});
// table plan

//table registration_info-------------------------------------------
// get all registration info
app.get("/api/v1/registrationInfo", async (req, res) => {
  try {
    const allregistrationInfo = await db.query(
      "select * from registration_info"
    );
    res.status(200).json({
      status: "success",
      length: allregistrationInfo.rows.length,
      data: allregistrationInfo.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// create a reg. info

app.post("/api/v1/registrationInfo", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO registration_info  ( member_id,plan_id ,package_id ,start_date , end_date,trainer_id ,status ) VALUES( $1,$2,$3,$4,$5,$6,$7) returning *",
      [
        req.body.member_id,
        req.body.plan_id,
        req.body.package_id,
        req.body.start_date,
        req.body.end_date,
        req.body.trainer_id,
        req.body.status,
      ]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//delete reg info
app.delete("/api/v1/registrationInfo/:id", async (req, res) => {
  try {
    const results = await db.query(
      "delete from registration_info where id = $1",
      [req.params.id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// get a reg info
app.get("/api/v1/registrationInfo/:id", async (req, res) => {
  try {
    const result = await db.query(
      "select * from registration_info where id=$1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// update a reg info
app.put("/api/v1/registrationInfo/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update registration_info set member_id=$1,plan_id=$2,package_id=$3,start_date=$4,end_date=$5,trainer_id=$6,status=$7 where id=$8 returning * ",
      [
        req.body.member_id,
        req.body.plan_id,
        req.body.package_id,
        req.body.start_date,
        req.body.end_date,
        req.body.trainer_id,
        req.body.status,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});

// schedules tables --------------------

// trainers tables -------------------------
//  get all trainers

app.get("/api/v1/trainers", async (req, res) => {
  try {
    const alltrainers = await db.query("select * from trainers");
    res.status(200).json({
      status: "success",
      length: alltrainers.rows.length,
      data: alltrainers.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//creater a trainer
app.post("/api/v1/trainers", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO  trainers ( name, contact,email ,rate ) VALUES( $1,$2,$3,$4) returning *",
      [req.body.name, req.body.contact, req.body.email, req.body.rate]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// delete a trainer
app.delete("/api/v1/trainers/:id", async (req, res) => {
  try {
    const results = await db.query("delete from trainers where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//get a trainers
app.get("/api/v1/trainers/:id", async (req, res) => {
  try {
    const result = await db.query("select * from trainers where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//update a trainers
app.put("/api/v1/trainers/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update trainers set name=$1,contact=$2,email=$3,rate=$4 where id=$5 returning * ",
      [
        req.body.name,
        req.body.contact,
        req.body.email,
        req.body.rate,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});

// users tables ------------------------------

// all users
app.get("/api/v1/users", async (req, res) => {
  try {
    const allusers = await db.query("select * from users");
    res.status(200).json({
      status: "success",
      length: allusers.rows.length,
      data: allusers.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

//  create users
app.post("/api/v1/users", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO  users ( name, username, password,admin, staff,subscriber) VALUES( $1,$2,$3,$4,$5,$6) returning *",
      [
        req.body.name,
        req.body.username,
        req.body.password,
        req.body.admin,
        req.body.staff,
        req.body.subscriber,
      ]
    );

    res.status(201).json({
      status: "success",
      data: results.rows[0],
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// delete users
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    const results = await db.query("delete from users where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// get a users
app.get("/api/v1/users/:id", async (req, res) => {
  try {
    const result = await db.query("select * from users where id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

// update a users
app.put("/api/v1/users/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update users set name=$1,username=$2,password=$3,admin=$4,staff=$5,subscriber=$6 where id=$7 returning * ",
      [
        req.body.name,
        req.body.username,
        req.body.password,
        req.body.admin,
        req.body.staff,
        req.body.subscriber,
        req.params.id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: results.rows,
    });
  } catch (error) {
    res.send({ error });
  }
});

app.listen(port, () => {
  console.log(`server is on the port ${port}`);
});
