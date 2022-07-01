const express = require("express");
const router = express.Router();
const gameController=require("../controllers/gameController");
const publisherController=require("../controllers/publisherController");
const userController=require("../controllers/userController");


require("dotenv").config();


router.route("")
    .post(gameController.addNewGame)
    .get(gameController.getAll);

router.route(process.env.PATH_ID_PARAMS)
    .get(gameController.getById)
    .delete(gameController.deleteGame)
    .put(gameController.fullUpdate)
    .patch(gameController.partialUpdate);

router.route("/:gameId/publishers")
    .get(publisherController.getPublisher)
    .post(publisherController.create)
    .delete(publisherController.deleteById)
    .put(publisherController.fullUpdate)
    .patch(publisherController.partialUpdate);


module.exports = router;




