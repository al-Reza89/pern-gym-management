require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// get all members
app.get("/api/v1/admin", async (req, res) => {
  console.log("server is not connected");
  try {
    const allmembers = await db.query("select * from admin");
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

app.listen(3001, () => {
  console.log("connected to backend!");
});
