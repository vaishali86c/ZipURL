import { nanoid } from "nanoid";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import zod from "zod"
import ApiResponse from "../utils/ApiResponse.js";
import { Url } from "../models/url.model.js"
import { User } from "../models/user.model.js";

const urlSchema = zod.object({
    url: zod.string(),
})

const listUrl = asyncHandler(async (req, res) => {
    if(!req._id) {
        return new ApiError(404, "Invalid Credentials");
    }
    const user = await User.findById(req._id);
    
    const urlIds = user.urls;
    let data = [];

    for(let i = 0; i < urlIds.length; i++) {
        let urlId = urlIds[i];
        const url = await Url.findById(urlId);
        data.push({
            longUrl: url.url,
            shortId: `${process.env.URL}${url.shortId}`
        });
    }
    return res.status(200).json(new ApiResponse(200, data, "Url Received Successfully"));
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
        if(req._id) {
            await User.findByIdAndUpdate(req._id, 
                { $addToSet: {urls: existedUrl._id}}
            )
        }

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
    if(req._id) {
        await User.findByIdAndUpdate(req._id, 
            { $addToSet: {urls: urlObj._id}}
        )
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

export { getZipUrl, handleRedirect, listUrl }