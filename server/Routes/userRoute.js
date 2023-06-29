import express from "express";
import {
  addUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../Controllers/userController.js";

export const userRoute = express.Router();

userRoute.get("/", getAllUser);
userRoute.get("/:id", getSingleUser);
userRoute.post("/add", addUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);
