const express = require("express");
const router = express.Router();

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const { verifyToken, verifyRole } = require("../middleware/auth");

router.get("/get", verifyToken, verifyRole(["admin", "user"]), getProduct);
router.post("/post", verifyToken, verifyRole(["admin"]), createProduct);
router.put("/put", verifyToken, verifyRole(["admin", "user"]), updateProduct);
router.delete("/delete/:id", verifyToken, verifyRole(["admin"]), deleteProduct);

module.exports = router;
