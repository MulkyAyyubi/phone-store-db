import express from "express";
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductHandler,
  getProductByIdHandler,
  updateProductHandler,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProductHandler);
productRouter.get("/products/:id", getProductByIdHandler);
productRouter.post("/products", createProductHandler);
productRouter.put("/products/:id", updateProductHandler);
productRouter.delete("/products/:id", deleteProductHandler);

export default productRouter;
