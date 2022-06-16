const express = require("express");
const {
  getPayments,
  createPayment,
  deletePayment,
  getPayment,
  updatePayment,
} = require("../controllers/payment");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/", getPayments);
router.post("/", createPayment);
router.delete("/:id", deletePayment);
router.get("/:id", getPayment);
router.put("/:id", updatePayment);

module.exports = router;
