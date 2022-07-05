const mongoose = require("mongoose");
const SERIES = mongoose.model("Series");
require("dotenv").config();

let response = {
    status: process.env.STATUS_OK,
    message: process.env.SUCCESS
}


let getAll = function (req, res) {

    if (isNaN(req.query.offset) || isNaN(req.query.count)) {
        res.status(400).json({"message": "QueryString Offset and Count should be numbers"});
        return;
    }

    let offset = process.env.DEFAULT_OFFSET;
    let count = process.env.DEAFULT_COUNT;

    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count,10);
    }

    SERIES.find().skip(offset).limit(count).exec(function (err, series) {
        if (err) {
            console.log(process.env.ERROR, err);
            response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
            response.message = process.env.INTERNAL_SERVER_ERROR;
        } else if(series==null){
            console.log("Series not found");
            response.message = process.env.CONTENT_NOT_FOUND;
            response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
        } else {
            console.log(process.env.SERIES_FOUND);
            console.log(series);
            response.message = series;
        }
        res.status(response.status).json(response.message);
    });
}

let getSeriesById = function (req, res) {

    const seriesId = req.params.id;
    if (!mongoose.isValidObjectId(seriesId)) {
        console.log(process.env.INVALID_ID_MESSAGE, seriesId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, seriesId });
    } else {
        SERIES.findById(seriesId).exec(function (err, series) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            }else if(series==null){
                console.log("Series not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.SERIES_FOUND);
                response.message = series;
            }
            res.status(response.status).json(response.message);
        });

    }
}


let save = function (req, res) {
    console.log(req);

    const review=req.body.review;

    console.log("review->",review);
    const cast=req.body.cast;
    console.log("cast->",cast);
    const language=req.body.language;
    console.log("language->",language);

    const series = {
        name: req.body.name,
        language: language,
        genre: req.body.genre,
        presentYear: req.body.presentYear,
        review: review,
        cast: cast
    }

    console.log(series);

    SERIES.create(series, function (err, series) {
        if (err) {
            console.log(process.env.ERROR, err);
            response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
            response.message = process.env.INTERNAL_SERVER_ERROR;
        } else {
            console.log(process.env.SAVE_NEW_SERIES);
            response.message = series;
        }
        res.status(response.status).json(response.message);
    });

}

let deleteSeries = function (req, resp) {

    const seriesId = req.params.id;
    if (!mongoose.isValidObjectId(seriesId)) {
        console.log(process.env.INVALID_ID_MESSAGE, seriesId);
        resp.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, seriesId });
    } else {
        SERIES.findByIdAndDelete(seriesId).exec(function (err, series) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if(series==null){
                console.log("Series not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.DELETE_SERIES_MESSAGE, seriesId);
                response.message = process.env.DELETED_SUCCESSFULLY;
            }
            resp.status(response.status).json(response.message);
        })
    }
}

let update = function (req, res) {

    const seriesUpdate = {
        name: req.body.name,
        language: req.body.language
    }

    console.log(seriesUpdate);

    const seriesId = req.params.id;
    if (!mongoose.isValidObjectId(seriesId)) {
        console.log(process.env.INVALID_ID_MESSAGE, seriesId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, seriesId });
    } else {
        SERIES.findById(seriesId).exec(function (err, series) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            }else if(series==null){
                console.log("Series not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            } else {
                console.log(process.env.SERIES_FOUND);
                series.name = seriesUpdate.name;
                series.language = seriesUpdate.language;
                series.save(function (err) {
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else {
                        response.message = process.env.UPDATED_SUCCESSFULLY;
                    }
                })
            }
            res.status(response.status).json(response.message);
        });

    }
}

let updateAll = function (req, res) {

    const seriesUpdate = {
        name: req.body.name,
        language: req.body.language,
        genre: req.body.genre,
        presentYear: req.body.presentYear,
        review: req.body.review,
        cast: req.body.cast
    }

    console.log(seriesUpdate);

    const seriesId = req.params.id;
    if (!mongoose.isValidObjectId(seriesId)) {
        console.log(process.env.INVALID_ID_MESSAGE, seriesId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, seriesId });
    } else {
        SERIES.findById(seriesId).exec(function (err, series) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if(series==null){
                console.log("Series not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.SERIES_FOUND);
                series.name = seriesUpdate.name;
                series.language = seriesUpdate.language;
                series.genre=seriesUpdate.genre;
                series.presentYear=seriesUpdate.presentYear;
                series.review=seriesUpdate.review;
                series.cast=seriesUpdate.cast;
                series.save(function (err) {
                    if (err) {
                        console.log(process.env.ERROR, err);
                        response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                        response.message = process.env.INTERNAL_SERVER_ERROR;
                    } else {
                        response.message = process.env.UPDATED_SUCCESSFULLY;
                    }
                })
            }
            res.status(response.status).json(response.message);
        });

    }
}



    module.exports = { getAll, getSeriesById,
         save, 
         deleteSeries,
         update,updateAll }