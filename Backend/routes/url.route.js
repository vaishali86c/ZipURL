import { Router } from "express";
import { getZipUrl, listUrl, removeUrl } from "../controllers/url.controller.js";
import verifyLogin from "../middlewares/verifyLogin.middleware.js";


const router = Router();

router.route("/").get(verifyLogin, getZipUrl)
router.route("/list").get(verifyLogin, listUrl)
router.route("/remove").delete(verifyLogin, removeUrl)

export default router