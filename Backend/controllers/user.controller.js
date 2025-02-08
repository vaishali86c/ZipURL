import { User } from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"
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

    const existUser = User.findOne({ username })

    if(existUser) {
        throw new ApiError(400, "User already exist");
        
    }
})

const handleLogin = asyncHandler(async (req, res) => {
    
})

const handleLogout = asyncHandler(async (req, res) => {

})

export {handleRegister, handleLogin, handleLogout}