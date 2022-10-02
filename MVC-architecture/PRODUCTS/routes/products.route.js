const express = require("express");
const router = express.Router();
const {
  getProducts,
  getHome,
  saveProducts,
} = require("../controllers/products.controller");

router.get("/", getHome);

router.get("/products", getProducts);

router.post("/products", saveProducts);

module.exports = router;
