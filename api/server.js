require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const usersRoute = require("./routes/users");
const packagesRoute = require("./routes/packages");
const instructorsRoute = require("./routes/instructors");
const workoutplansRoute = require("./routes/workoutPlan");
const adminsRoute = require("./routes/admins");
const paymentsRoute = require("./routes/payments");
const usersInfoRoute = require("./routes/registrationInfo");
const authRoute = require("./routes/auth");

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/admins", adminsRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/packages", packagesRoute);
app.use("/api/v1/instructors", instructorsRoute);
app.use("/api/v1/workoutplans", workoutplansRoute);
app.use("/api/v1/payments", paymentsRoute);
app.use("/api/v1/usersInfo", usersInfoRoute);

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
