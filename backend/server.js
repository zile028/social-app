const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {PORT, DB_URL} = require("./config/config");
const server = express();
server.use(cors());
server.use(express.json());

mongoose.connect(DB_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    });

server.use("/api", require("./routes"));


server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on http://localhost:${PORT}`);
    }
});