import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/index.js";
//routes 
import healthCheckRoute from "./routes/healthCheck.route.js"

const app = express();

const PORT = process.env.PORT || 8002

// configuration dotenv
dotenv.config()
// Database connection
connectDb()


app.get('/', (req, res) => {
    res.send(" Api working !")
   
})


app.use("/api/v1", healthCheckRoute)








app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

