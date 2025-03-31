const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rank: { type: Number, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Category", CategorySchema);
