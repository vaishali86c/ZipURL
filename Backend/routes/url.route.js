import { Router } from "express";
import { getZipUrl } from "../controllers/url.controller.js";


const router = Router();

router.route("/").get(getZipUrl)

export default router