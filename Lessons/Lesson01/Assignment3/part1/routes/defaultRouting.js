const express = require("express");
const router = express.Router();
const defaultController = require("../controller/defaultController.js");
const path=require("path");


router.route("")
    .post(defaultController)
    .get(express.static(path.join(__dirname, process.env.PUBLIC, "index.html")));


module.exports = router;