import { pool } from "../config/db.js";
import { ResponseError } from "../error/reponseError.js";

export const getAllProduct = async () => {
  const [products] = await pool.query("SELECT * FROM products");

  return products;
};

export const getProductById = async (id) => {
  const [products] = await pool.query("SELECT * FROM products WHERE id=?", [
    id,
  ]);

  if (products.length === 0) {
    throw new ResponseError(404, "product with such id does not exist");
  }

  return products[0];
};

export const createProduct = async (request) => {
  const { user_id, name, description, price, stock } = request;

  const [products] = await pool.query(
    "INSERT INTO products (user_id, name, description, price, stock) VALUES (?,?,?,?,?)",
    [user_id, name, description, price, stock]
  );

  const newProduct = {
    user_id,
    name,
    description,
    price,
    stock,
  };

  return newProduct;
};

export const updateProduct = async (id, request) => {
  const { user_id, name, description, price, stock } = request;

  const [products] = await pool.query(
    "UPDATE products SET user_id = ?, name = ?, description = ?, price = ?, stock = ? WHERE id = ?",
    [user_id, name, description, price, stock, id]
  );

  if (products.affectedRows === 0) {
    throw new ResponseError(404, "product with such id does not exist");
  }

  const updatedProduct = {
    user_id,
    name,
    description,
    price,
    stock,
  };

  return updatedProduct;
};

export const deleteProduct = async (id) => {
  const [products] = await pool.query("DELETE FROM products WHERE id = ?", [
    id,
  ]);

  if (products.affectedRows === 0) {
    throw new ResponseError(404, " product with such id does not exist");
  }
};
