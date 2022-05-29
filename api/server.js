require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`server is on the port ${port}`);
});
