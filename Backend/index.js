const express = require("express");

const app = express();

const PORT = process.env.PORT || 8002

app.get('/', (req, res) => {
    res.send(" Api working !")
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})