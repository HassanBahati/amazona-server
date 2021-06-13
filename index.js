// imports
const express = require("express");
const data = require("./data.js");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const userRouter = require("./routers/userRouter.js");

// instantiating express
const app = express();

//connct to mongose
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// root handler
app.get("/", (req, res) => {
  res.send("Server is ready");
});
{
}

// products route
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// prod details
app.get("/api/products/:id", (req, res) => {
  const products = data.products.find((x) => x._id === req.params.id);
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.use("/api/users", userRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err });
});

// setting port
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
