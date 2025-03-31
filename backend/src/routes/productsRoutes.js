const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Counter = require('../models/counter');

// Function to generate sequential product ID
const generateProductId = async () => {
  const counter = await Counter.findByIdAndUpdate(
    { _id: 'productId' },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );

  return `PROD-${counter.sequence_value.toString().padStart(4, '0')}`;
};

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by productId
router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST - Create a new product
router.post('/', async (req, res) => {
  try {
    const newProductId = await generateProductId();
    console.log("Generated productId:", newProductId); // Debug log

    const product = new Product({
      productId: newProductId,
      name: req.body.name,
      price: req.body.price,
      currency: req.body.currency || "GH₵",
      category: req.body.category,
      stock: req.body.stock,
      image: req.body.image,
    });

    const newProduct = await product.save();
    console.log("Saved product:", newProduct); // Check what was actually saved
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT - Update a product by productId
router.put('/:productId', async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update the fields
    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;
    product.stock = req.body.stock;
    product.image = req.body.image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    console.log("Delete request for ID:", req.params.id);
    
    // Try deleting by MongoDB _id first
    let product = await Product.findByIdAndDelete(req.params.id);
    
    // If that fails, try by productId
    if (!product) {
      console.log("Not found by _id, trying productId");
      product = await Product.findOneAndDelete({ productId: req.params.id });
    }
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found with either _id or productId' });
    }
    
    console.log("Deleted product:", product);
    res.json({ 
      message: 'Product deleted successfully',
      deletedProduct: product,
      idType: product._id.toString() === req.params.id ? 'MongoDB _id' : 'productId'
    });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;