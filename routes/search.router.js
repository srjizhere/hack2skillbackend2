const express = require("express");
const { searchContoller } = require("../controller/search.controller");


const searchRouter = express.Router();

searchRouter.get("/", searchContoller);

module.exports = {
  searchRouter,
};
