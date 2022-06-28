const express = require("express");
const router = express.Router();
const gameController = require("../controllers/GameController.js");
require("dotenv").config();


router.route(process.env.GAMES_URL)
    .post(gameController.addNewGame)
    .get(gameController.getAll);

router.route(process.env.GAMES_URL + process.env.PATH_ID_PARAMS)
    .get(gameController.getById)
    .delete(gameController.deleteGame)
    .put(gameController.fullUpdate)
    .patch(gameController.partialUpdate);

module.exports = router;




