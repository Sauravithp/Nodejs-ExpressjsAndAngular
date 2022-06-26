const mongoose = require("mongoose");
const PHP = mongoose.model("Series");
require("dotenv").config();

const response = {
    status: 200,
    message: "success"
}

const save = function (req, res) {
    const phpId = req.params.phpId;
    console.log("php id", phpId);
    if (!mongoose.isValidObjectId(phpId)) {
        console.log(process.env.INVALID_ID_MESSAGE, phpId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE).json({ 'message': process.env.INTERNAL_SERVER_ERROR });
    } else {
        PHP.findById(phpId).select("review").exec(function (err, php) {
            if (phpId == null) {
                console.log("Php not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            } else if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            }
            else {
                __addReview(req, res, php);
            }
            res.status(response.status).json(response.message);
        });
    }
}

let __addReview = function (req, res, php) {
    console.log("Inside __addReview");
    console.log(php);
    const review = {
        rating: req.body.rating,
        description: req.body.description
    }
    php.review.push(review);
    console.log(review);
    php.save(function (err, phpUpdated) {
        if (err) {
            console.log(process.env.ERROR, err);
            response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
            response.message = process.env.INTERNAL_SERVER_ERROR;
        } else {
            console.log("Updated php: ", phpUpdated);
            response.message = phpUpdated;
        }
    });
}

let getAll = function (req, res) {

    const phpId = req.params.phpId;

    if (!mongoose.isValidObjectId(phpId)) {
        console.log("Invalid phpId:", phpId, " Review controller line 61 ");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE).json({ 'message': process.env.INTERNAL_SERVER_ERROR });

    } else {
        PHP.findById(phpId).select("review").exec(function (err, reviews) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (reviews == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 66");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                console.log("reviews found.....review controller line 75");
                console.log(reviews);
                response.message = reviews;
            }
            res.status(response.status).json({ 'message': response.message });
        })
    }
}

let getById = function (req, res) {
    const phpId = req.params.phpId;
    const reviewId = req.params.reviewId;

    if (!mongoose.isValidObjectId(phpId) && !mongoose.isValidObjectId(reviewId)) {
        console.log("Review controller line 89->", "phpId or reviewId not valid");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json(process.env.INTERNAL_SERVER_ERROR);
    } else {
        PHP.findById(phpId).select("review").exec(function (err, reviews) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (reviews == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 66");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                const review = reviews.review.id(reviewId);
                console.log("Review Controller line -> 104 ", review);
                response.message = review;
            }
            res.status(response.status).json(response.message);
        })
    }
}


let deleteAllReview = function (req, res) {
    const phpId = req.params.phpId;

    if (!mongoose.isValidObjectId(phpId) && !mongoose.isValidObjectId(reviewId)) {
        console.log("Review controller line 89->", "phpId or reviewId not valid");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json(process.env.INTERNAL_SERVER_ERROR);
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (php == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 127");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                php.review = [];
                php.save(function (err, updatePhp) {
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else {
                        console.log("Review Controller line -> 138  DELETE REVIEWS ");
                        response.message = updatePhp;
                    }
                });
            }
            res.status(response.status).json(response.message);
        });

    }
}


let updateReview=function(req,res){
    const phpId = req.params.phpId;
    const reviewId = req.params.reviewId;
    const review={
        rating:req.body.rating,
        description: req.body.description
    }

    if (!mongoose.isValidObjectId(phpId) && !mongoose.isValidObjectId(reviewId)) {
        console.log("Review controller line 89->", "phpId or reviewId not valid");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json(process.env.INTERNAL_SERVER_ERROR);
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (php == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 169");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                php.review=review;
                php.save(function(err,updateReview){
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else{
                        console.log("Review Controller line -> 104 ", updateReview);
                        response.message = updateReview;
                    }
                })
            }
            res.status(response.status).json(response.message);
        })
    }


};


let deleteReviewById = function (req, res) {
    const phpId = req.params.phpId;
    const reviewId = req.params.reviewId;


    if (!mongoose.isValidObjectId(phpId) && !mongoose.isValidObjectId(reviewId)) {
        console.log("Review controller line 89->", "phpId or reviewId not valid");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json(process.env.INTERNAL_SERVER_ERROR);
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (php == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 127");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                php.review.id(reviewId).remove();
                php.save(function(err,updated){
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else{
                        console.log("Review Controller line -> 104 ", updated);
                        response.message = updated;
                    }
                });
            }
            res.status(response.status).json(response.message);
        });

    }
}

let updateReviewById = function (req, res) {
    const phpId = req.params.phpId;
    const reviewId = req.params.reviewId;

    const review={
        rating:req.body.rating,
        description: req.body.description
    }

    if (!mongoose.isValidObjectId(phpId) && !mongoose.isValidObjectId(reviewId)) {
        console.log("Review controller line 89->", "phpId or reviewId not valid");
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json(process.env.INTERNAL_SERVER_ERROR);
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if (php == null) {
                console.log(process.env.CONTENT_NOT_FOUND, " review controller line 127");
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
                response.message = process.env.CONTENT_NOT_FOUND;
            } else {
                const reviewToUpdate=php.review.id(reviewId);
                reviewToUpdate.rating=review.rating;
                reviewToUpdate.description=review.description;
                php.save(function(err,updated){
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else{
                        console.log("Review Controller line -> 104 ", updated);
                        response.message = updated;
                    }
                });
            }
            res.status(response.status).json(response.message);
        });

    }
}

module.exports = { save, getAll, getById, deleteAllReview,deleteReviewById,updateReview ,updateReviewById}