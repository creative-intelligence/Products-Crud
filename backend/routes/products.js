const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Server
router.get("/", (req, res) => {
  res.send("MERN Crud App ");
});

// Add a new product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get a specific product by ID
router.get("/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.json(product);
});

// Update a product by ID
router.put("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a product by ID
router.delete("/:productId", async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.productId);
  res.json(product);
});

module.exports = router;
