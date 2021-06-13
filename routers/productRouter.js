const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");
const data = require("../data.js");

const productRouter = express.Router();

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProduct = await Product.insertMany(data.products);
  })
);
