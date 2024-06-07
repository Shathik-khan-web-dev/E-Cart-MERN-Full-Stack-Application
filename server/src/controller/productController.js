const router = require("express").Router();
const Product = require("../modal/productModal");

router.get("/product/get", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products fetched successfully",
      products: products
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/product/post", async (req, res) => {
  console.log(req.body);
  //   return;
  const product = new Product(req.body);
  console.log(product);
  try {
    const savedProduct = await product.save();
    res.status(201).json({
      message: "Product saved successfully",
      savedProduct: savedProduct
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/product/update", async (req, res) => {
  console.log(req.body);
  const {
    _id,
    productName,
    productPrice,
    productDescription,
    productImage,
    productCategory,
    productQuantity
  } = req.body;

  const updateProduct = await Product.findByIdAndUpdate(
    _id,
    {
      productName,
      productPrice,
      productDescription,
      productImage,
      productCategory,
      productQuantity
    },
    { new: true }
  );

  if (updateProduct) {
    res.status(200).json({
      message: "Product updated successfully",
      updateProduct: updateProduct
    });
  }
});

router.delete("/product/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log("Id to delete: ", id);

    await Product.findByIdAndDelete(id);

    return res.status(200).json({ message: "Deleted Success" });
  } catch (error) {
    return res.status(500).json({ message: "Error in Server..." });
  }
});

module.exports = router;
