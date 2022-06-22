const express = require("express");
const router = express.Router();
const gameController = require("./controllers/GameController");


router.route("/json")
    .post( gameController.post)
    .get(gameController.getAll);


module.exports = router;




