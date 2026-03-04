const express = require("express");
const Order = require("../models/Order");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const order = await Order.create({
    user: req.user.id,
    orderItems: req.body.orderItems,
    totalPrice: req.body.totalPrice
  });
  res.json(order);
});

module.exports = router;
