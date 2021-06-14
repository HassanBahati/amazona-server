// imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const userRouter = require("./routers/userRouter.js");
const productRouter = require("./routers/productRouter.js");
const orderRouter = require("./routers/orderRouter.js");

dotenv.config();

// instantiating express
const app = express();

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connct to mongose
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
   useFindAndModify:false
});

// root handler
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err });
});

// setting port
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
