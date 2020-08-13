const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const { authenticateJWT } = require('../middleware/authenticator');

router.post("/", authenticateJWT, productController.create);

module.exports = router;
