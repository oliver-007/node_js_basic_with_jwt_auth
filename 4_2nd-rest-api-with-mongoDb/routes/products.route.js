const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
