const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true }, // Add this line
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: "GH₵" },
  category: { type: String, required: true },  
  stock: { type: Number, required: true },
  image: { type: String, required: false },
});



const Product = mongoose.model('Product', productSchema);

module.exports = Product;