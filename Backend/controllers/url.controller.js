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
    let generatedUrl = ''
    const { url } = req.body
    const shortId = nanoid(6)

    const existedUrl = await Url.findOne({url})
    if(existedUrl) {
        generatedUrl = `${process.env.URL}${existedUrl.shortId}`
        return res.status(200).json(new ApiResponse(200, generatedUrl, "Url Generated" ))
    }

    const urlObj = await Url.create({
        url,
        shortId
    })
    if(!urlObj) {
        throw new ApiError(404, "Something went wrong")
    }
    generatedUrl = `${process.env.URL}${shortId}`
    return res.status(200).json(new ApiResponse(200, generatedUrl, "Url Generated" ))
})

const handleRedirect = asyncHandler(async(req, res) => {
    const shortId = req.params.shortId;

    const url = await Url.findOne({shortId})
    if(!url) {
        throw new ApiError(404, "Invalid Url")
    }
    return res.redirect(url.url)
})

export { getZipUrl, handleRedirect }