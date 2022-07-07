const express = require("express");
const Router = express.Router();
require("dotenv").config();
const seriesController = require("../controllers/seriesController.js");
const reviewController = require("../controllers/reviewController");


Router.route(process.env.SERIES_URL)
    .get(seriesController.getAll)
    .post(seriesController.save);

Router.route(process.env.SERIES_URL + process.env.PATH_ID_PARAMS)
    .get(seriesController.getSeriesById)
    .delete(seriesController.deleteSeries)
    .patch(seriesController.update)
    .put(seriesController.updateAll);

Router.route(process.env.SERIES_URL + "/search"+"/:name")
    .get(seriesController.getSeriesByName);

Router.route(process.env.SERIES_URL + process.env.PHP_PATH_ID_PARAMS + process.env.REVIEW_URL)
    .post(reviewController.save)
    .get(reviewController.getAll)
    .delete(reviewController.deleteAllReview)
    .put(reviewController.updateReview);

Router.route(process.env.SERIES_URL + process.env.PHP_PATH_ID_PARAMS + process.env.REVIEW_URL + process.env.REVIEW_PATH_ID_PARAMS)
    .get(reviewController.getById)
    .delete(reviewController.deleteReviewById)
    .patch(reviewController.updateReviewById);

module.exports = Router;