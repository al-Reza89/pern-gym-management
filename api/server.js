require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const db = require("./db/index");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", usersRoute);

app.listen(port, () => {
  console.log(`server is on the port ${port}`);
});
