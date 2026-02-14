import express from "express";
import { GetAllUser, Register } from "../controllers/userController.js";

const userRoute = express.Router()

// ! for Create
userRoute.post("/register",Register);

userRoute.get("/getuser",GetAllUser);

export default userRoute;