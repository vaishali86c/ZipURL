import express from "express";
import ApiResponse from "./utils/ApiResponse.js";

const app = express();

const PORT = process.env.PORT || 8002

app.get('/', (req, res) => {
    // res.send(" Api working !")

    return res.send(new ApiResponse(200, {"name" : "sushant"}))
})


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})

