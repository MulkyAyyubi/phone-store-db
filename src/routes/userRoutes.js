import express from "express";
import {
    AddUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
} from "../handlers/userHandler.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsersHandler);
userRouter.get("/users/:id", getUserByIdHandler);
userRouter.post("/users", AddUserHandler);

export default userRouter;
