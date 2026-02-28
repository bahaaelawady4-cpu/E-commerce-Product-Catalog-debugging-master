const express = require("express");
const router = express.Router();
const createProduct = require("../controllers/productController");
const { getAllProducts } = require("../controllers/productController");

router.post("/products", createProduct);
router.get("/products", getAllProducts);

module.exports = router;
