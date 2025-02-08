import { Router } from "express";
import { handleLogin, handleLogout, handleRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").get(handleRegister)
router.route("/login").get(handleLogin)
router.route("/logout").get(handleLogout)

export default router

