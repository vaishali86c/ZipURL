import mongoose, {Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { union } from "zod"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    urls: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Url',
        }
    ],
}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getToken = async function() {
    const payload = {
        id: this._id,
        username: this.username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d"})

    return token
}

export const User = mongoose.models.user || mongoose.model("User", userSchema)