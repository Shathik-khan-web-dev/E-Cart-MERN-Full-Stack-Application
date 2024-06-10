const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true
  })
);

/* MongoDb Integration */
const mongoose = require("./src/config/db");

app.get("/", (req, res) => {
  res.send("E-Cart Server!");
});

/* Controller */
const productController = require("./src/controller/productController");
app.use("/", productController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`E-Cart Server listening on port ${PORT}!`);
});
