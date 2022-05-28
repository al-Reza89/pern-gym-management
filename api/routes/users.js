// const express = require("express");
// const { getUsers } = require("../controllers/user");

// const router = express.Router();
// router.get("/", getUsers);

// module.exports = router;

import express from "express";
import { getUsers } from "../controllers/user.js";
const router = express.Router();

router.get("/", getUsers);
export default router;
