import * as ProductService from "../services/productService.js";

export const getAllProductHandler = async (req, res, next) => {
  try {
    const response = await ProductService.getAllProduct();

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error)
  }
};

export const getProductByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await ProductService.getProductById(id);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error)
  }
};

export const createProductHandler = async (req, res, next) => {
  try {
    const response = await ProductService.createProduct(req.body);

    res.status(201).json({
      status: "success",
      message: "berhasil",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductHandler = async (req, res, next) => {
  const {id} = req.params;
  try {
    const response = await ProductService.updateProduct(id, req.body);

    res.status(200).json({
      status: "success",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductHandler = async (req, res, next) => {
  const {id} = req.params;
  try {
    await ProductService.deleteProduct(id);

    res.status(200).json({
      status: "success",
      message: "Product has been successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};
