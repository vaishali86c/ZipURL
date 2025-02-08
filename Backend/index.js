import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/index.js";
//routes 
import healthCheckRouter from "./routes/healthCheck.route.js"
import userRouter from "./routes/user.route.js"

const app = express();

const PORT = process.env.PORT || 8002

// configuration dotenv
dotenv.config()
// Database connection
connectDb()


app.get('/', (req, res) => {
    res.send(" Api working !")
   
})


app.use("/api/v1", healthCheckRouter)
app.use("/api/v1/user", userRouter)







app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

