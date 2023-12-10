import { RegisterUser, LoginUser } from "../controllers/user.controllers.js";
import express from "express";
const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").get(LoginUser);
export { router };
 