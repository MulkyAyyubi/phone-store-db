import { pool } from "../config/db.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const [users] = await pool.query(
      "SELECT fullname, username, email, role, address, age, phone_number FROM users"
    );

    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const [users] = await pool.query(
      "SELECT fullname, username, email, role, address, age, phone_number FROM users WHERE id = ?",
      [id]
    );

    if (users.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "user not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: users[0],
    });
  } catch (error) {
    console.error(error);
  }
};

export const AddUserHandler = async (req, res) => {
  const { fullname, username, email, password, role } = req.body;
  try {
    const [userInsert] = await pool.query(
      "INSERT INTO users (fullname, username, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fullname, username, email, password, role]
    );

    const newUser = {
      id: userInsert.insertId,
      fullname,
      username,
      email,
      role,
    };

    res.status(200).json({
      message: "success",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
  }
};
