import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const healthCheckController = asyncHandler(async (req, res) => {
    return res.status(200).send(new ApiResponse(200, "OK", "healthCheck Completed!"))
})

export default healthCheckController