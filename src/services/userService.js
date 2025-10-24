import { pool } from "../config/db.js";
import { ResponseError } from "../error/reponseError.js";

export const getAllUser = async () => {
  const [users] = await pool.query(
    "SELECT id, fullname, username, email, role, address, phone_number, age FROM users"
  );

  return users;
};

export const getUserById = async (id) => {
  const [users] = await pool.query(
    "SELECT fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
    [id]
  );

  if (users.length === 0) {
    throw new ResponseError(404, "user with such id does not exist");
  }

  return users[0];
};

export const createUser = async (request) => {
  const { fullname, username, email, password, role } = request;

  const [users] = await pool.query(
    "INSERT INTO users (fullname , username, email, password, role) VALUES (?,?,?,?,?)",
    [fullname, username, email, password, role]
  );

  const newUser = {
    id: users.insertId,
    fullname,
    username,
    email,
    role,
  };

  return newUser;
};

export const updateUser = async (id, request) => {
  const { fullname, username, email, password, role } = request;

  const [users] = await pool.query(
    "UPDATE users SET fullname = ?, username = ?, email = ?, password = ?, role = ? WHERE id = ?",
    [fullname, username, email, password, role, id]
  );

  if (users.affectedRows === 0) {
    throw new ResponseError(404, "user with such id does not exist")
  }
  
  const updatedUser = {
    id,
    fullname,
    username,
    email,
    role,
  };
  
  return updatedUser;
};

export const deleteUser = async (id) => {
  const [users] = await pool.query(
    "DELETE FROM users WHERE id = ?", [id]
  )

  if (users.affectedRows === 0) {
    throw new ResponseError(404, "user with such id does not exist")
  }
}
