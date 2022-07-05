const express = require("express");
const Router = express.Router();
require("dotenv").config();
const castRoute = require("./castRoute");
const seriesRoute = require("./seriesRoute");


Router.use("/series",seriesRoute);

module.exports = Router;