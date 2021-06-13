const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");
const data = require("../data.js");

const productRouter = express.Router();

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

module.exports = productRouter;
