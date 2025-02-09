import { nanoid } from "nanoid";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import zod from "zod"
import ApiResponse from "../utils/ApiResponse.js";
import { Url } from "../models/url.model.js"

const urlSchema = zod.object({
    url: zod.string(),
})

const getZipUrl = asyncHandler(async(req, res) => {

    if(!urlSchema.safeParse(req.body).success) {
        throw new ApiError(400, "Url does not valid")
    }
    const { url } = req.body
    const shortId = nanoid(6)

    const urlObj = await Url.create({
        url,
        shortId
    })
    if(!urlObj) {
        throw new ApiError(404, "Something went wrong")
    }
    const generatedUrl = `${process.env.URL}${shortId}`
    return res.status(200).json(new ApiResponse(200, generatedUrl, "Url Generated" ))
})

export default getZipUrl