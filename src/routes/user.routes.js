import { RegisterUser } from "../controllers/user.controllers.js";
import express from "express";
const router = express.Router();

router.route("/register").post(RegisterUser);
export { router };
