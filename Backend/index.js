import express from "express";
import ApiResponse from "./utils/ApiResponse.js";

const app = express();

const PORT = process.env.PORT || 8002

app.get('/', (req, res) => {
    res.send(" Api working !")
   
})


//routes 

import healthCheckRoute from "./routes/healthCheck.route.js"

app.use("/api/v1", healthCheckRoute)



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

