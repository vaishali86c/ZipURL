import { Router } from "express";
import { getZipUrl } from "../controllers/url.controller.js";
import verifyLogin from "../middlewares/verifyLogin.middleware.js";


const router = Router();

router.route("/").get(verifyLogin, getZipUrl)

export default router