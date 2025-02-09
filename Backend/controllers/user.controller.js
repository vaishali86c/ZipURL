import { User } from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandler from "../utils/asyncHandler.js"
import zod from "zod"

const userSchema = zod.object({
    username: zod.string(),
    password: zod.string().min(8)
})


const handleRegister = asyncHandler(async (req, res) => {

    if(!userSchema.safeParse(req.body).success) {
        throw new ApiError(400, "Username and Password does not valid")
    }
    
    const { username, password } = req.body

    const existUser = await User.findOne({ username })
    if(existUser) {
        throw new ApiError(400, "User already exist");
    }

    let user = new User({
        username, 
        password
    })

    await user.save()

    const token = await user.getToken();

    return res.status(200).json(new ApiResponse(200, token, "Successfully Register!"))
})

const handleLogin = asyncHandler(async (req, res) => {
    if(!userSchema.safeParse(req.body).success) {
        throw new ApiError(400, "Username and Password does not valid")
    }

    const { username, password } = req.body
    const user = await User.findOne({username});

    if(!user) {
        throw new ApiError(400, "Invalid Username!!")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if(!isPasswordCorrect) {
        throw new ApiError(400, "Invalid password!!")
    }

    const token = await user.getToken()
    
    return res.status(200).json(new ApiResponse(200, token, "Successfully Login!"))
})


export {handleRegister, handleLogin}