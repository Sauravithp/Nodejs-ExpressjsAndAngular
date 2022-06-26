const express = require("express");
const Router = express.Router();
require("dotenv").config();
const phpController = require("../controllers/phpController.js");
const reviewController = require("../controllers/reviewController");


Router.route(process.env.PHP_URL)
    .get(phpController.getAll)
    .post(phpController.save);

Router.route(process.env.PHP_URL + process.env.PATH_ID_PARAMS)
    .get(phpController.getPhpById)
    .delete(phpController.deletePhp)
    .patch(phpController.update)
    .put(phpController.updateAll);

Router.route(process.env.PHP_URL + process.env.PHP_PATH_ID_PARAMS + process.env.REVIEW_URL)
    .post(reviewController.save)
    .get(reviewController.getAll)
    .delete(reviewController.deleteAllReview)
    .put(reviewController.updateReview);

Router.route(process.env.PHP_URL + process.env.PHP_PATH_ID_PARAMS + process.env.REVIEW_URL + process.env.REVIEW_PATH_ID_PARAMS)
    .get(reviewController.getById)
    .delete(reviewController.deleteReviewById);

module.exports = Router;