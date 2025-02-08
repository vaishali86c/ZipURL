import mongoose from "mongoose"

const connectDb = async() => {
    try {
        await mongoose.connect(`${process.env.MONGOOSE_URL}/zipurl`)
        console.log("Database Connected !!!")
    } catch (error) {
        console.log(error)
        console.log("Mongodb connection error !!!!")
    }
}


export default connectDb