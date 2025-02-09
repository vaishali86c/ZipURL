import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/index.js";
//routes 
import healthCheckRouter from "./routes/healthCheck.route.js"
import userRouter from "./routes/user.route.js"
import errorHandler from "./middlewares/error.middleware.js";

const app = express();
//External middleware
app.use(express.json())

const PORT = process.env.PORT || 8002

// configuration dotenv
dotenv.config()
// Database connection
connectDb()


app.get('/', (req, res) => {
    res.send(" Api working !")
   
})


app.use("/api/v1/healthCheck", healthCheckRouter)
app.use("/api/v1/user", userRouter)




app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

