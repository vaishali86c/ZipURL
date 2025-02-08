import mongoose, { model } from "mongoose"


const urlSchema = new mongoose.Schema({
    url: {
        type: String
    }, 
    shortId: {
        type: String, 
        unique: true
    },
}, {
    timestamps: true
})

export const Url = model("Url", urlSchema)

