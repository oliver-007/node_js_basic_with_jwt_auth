const products = require("../models/products.model");
const path = require("path");

exports.getHome = (req, res) => {
  res.status(200).json({
    message: "All OK, proceed to products route..",
  });
};

exports.getProducts = (req, res) => {
  res.sendFile(path.join(`${__dirname}/../views/products.html`));
};

exports.saveProducts = (req, res) => {
  const name = req.body.productName;
  const price = req.body.productPrice;
  products.push({
    name: name,
    price: price,
  });
  res.status(200).json({
    success: true,
    products,
  });
};
