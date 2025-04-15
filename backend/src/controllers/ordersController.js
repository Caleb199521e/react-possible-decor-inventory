const Order = require('../models/Order');
const Product = require('../models/Product');

// Create a new order and update stock
const createOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }

    const newOrder = new Order(req.body);
    await newOrder.save();

    product.stock -= quantity;
    await product.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };
