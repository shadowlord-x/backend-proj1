import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

//all the routes that start with user will be written here. i.e., user will be prefix

router.route("/register").post(registerUser)


export default router