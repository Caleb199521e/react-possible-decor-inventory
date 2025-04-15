// routes/orders.js
import express from "express";
import Order from "../models/Orders.js";

const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Get single order
router.get("/:id", async (req, res) => {
  const order = await Order.findOne({ id: req.params.id });
  res.json(order);
});

// Create new order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
});

// Update order
router.put("/:id", async (req, res) => {
  const updated = await Order.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
  res.json(updated);
});

// Delete order
router.delete("/:id", async (req, res) => {
  await Order.findOneAndDelete({ id: req.params.id });
  res.sendStatus(204);
});

export default router;
