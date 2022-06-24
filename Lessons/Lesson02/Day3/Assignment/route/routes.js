const express = require("express");
const router = express.Router();
const gameController = require("../controllers/GameController");



router.route("/games")
    .post(gameController.post)
    .get(gameController.getAll);

router.route("/games/:id")
    .delete(gameController.deleteGame)


module.exports = router;




