import mongoose, { model } from "mongoose"

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
    urls: { 
        type: Schema.Types.ObjectId, 
        ref: 'Url' 
    },

}, {
    timestamps: true
})


export const User = mongoose.models.user || mongoose.model("User", userSchema)