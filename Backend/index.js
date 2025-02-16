import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/index.js";
import cors from "cors"
//routes 
import healthCheckRouter from "./routes/healthCheck.route.js"
import userRouter from "./routes/user.route.js"
import urlRouter from "./routes/url.route.js"
import errorHandler from "./middlewares/error.middleware.js";
import { handleRedirect } from "./controllers/url.controller.js"

const app = express();
//External middleware
app.use(express.json())
app.use(cors())

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
app.use("/api/v1/url", urlRouter)
app.use("/:shortId", handleRedirect)



app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

