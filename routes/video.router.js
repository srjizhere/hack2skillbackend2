const express = require("express");
const { videoController } = require("../controller/video.controller");

const videoRouter = express.Router();

videoRouter.get("/",videoController);


module.exports = {
    videoRouter
}
