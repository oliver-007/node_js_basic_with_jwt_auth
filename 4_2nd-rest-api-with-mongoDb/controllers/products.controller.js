const { v4: uuidv4 } = require("uuid");

const Product = require("../models/products.model");

const getProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();
    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      id: uuidv4(),
      name: req.body.productName,
      price: req.body.price,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const selectedProduct = await Product.findOne({ id: req.params.id });
    selectedProduct.name = req.body.productName;
    selectedProduct.price = req.body.price;
    await selectedProduct.save();
    res.status(202).json(selectedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const selectedProduct = await Product.findOne({ id: req.params.id });
    await Product.deleteOne({ id: req.params.id });
    res.status(203).json({
      message: `${selectedProduct.name} is deleted.`,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
