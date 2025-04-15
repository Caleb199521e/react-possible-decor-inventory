// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: String,
  product: String,
  customer: String,
  quantity: Number,
  amount: String,
  payment: String,
  status: String,
  image: String,
  date: String,
  address: String,
  tax: String,
  shippingCost: String,
});

export default mongoose.model("Order", orderSchema);
