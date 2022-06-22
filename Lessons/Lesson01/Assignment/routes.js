const express = require("express");
require("dotenv").config();
const router = express.Router();
const gameController = require("./controllers/GameController");


router.route("/json")
    .post(function (req, res) {
        gameController.post(req, res)
    })
    .get(function (req, res) {
        gameController.getAll(req,res)
    });


module.exports = router;




