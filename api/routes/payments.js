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

router.get("/", verifyAdmin, getPayments);
router.post("/", verifyAdmin, createPayment);
router.delete("/:id", verifyAdmin, deletePayment);
router.get("/:id", verifyAdmin, getPayment);
router.put("/:id", verifyAdmin, updatePayment);

module.exports = router;
