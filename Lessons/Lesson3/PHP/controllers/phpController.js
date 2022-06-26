const mongoose = require("mongoose");
const PHP = mongoose.model("Series");
require("dotenv").config();

let response = {
    status: process.env.STATUS_OK,
    message: process.env.SUCCESS
}


let getAll = function (req, res) {
    let offset = process.env.DEFAULT_OFFSET;
    let count = process.env.DEAFULT_COUNT;
    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count);
    }
    PHP.find().skip(offset).limit(count).exec(function (err, php) {
        if (err) {
            console.log(process.env.ERROR, err);
            response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
            response.message = process.env.INTERNAL_SERVER_ERROR;
        } else if(php==null){
            console.log("Php not found");
            response.message = process.env.CONTENT_NOT_FOUND;
            response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
        } else {
            console.log(process.env.PHP_FOUND);
            console.log(php);
            response.message = php;
        }
        res.status(response.status).json(response.message);
    });
}

let getPhpById = function (req, res) {

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log(process.env.INVALID_ID_MESSAGE, phpId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, phpId });
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            }else if(php==null){
                console.log("Php not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.PHP_FOUND);
                response.message = php;
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

    const php = {
        name: req.body.name,
        language: language,
        genre: req.body.genre,
        presentYear: req.body.presentYear,
        review: review,
        cast: cast
    }

    console.log(php);

    PHP.create(php, function (err, php) {
        if (err) {
            console.log(process.env.ERROR, err);
            response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
            response.message = process.env.INTERNAL_SERVER_ERROR;
        } else {
            console.log(process.env.SAVE_NEW_PHP);
            response.message = php;
        }
        res.status(response.status).json(response.message);
    });

}

let deletePhp = function (req, resp) {

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log(process.env.INVALID_ID_MESSAGE, phpId);
        resp.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, phpId });
    } else {
        PHP.findByIdAndDelete(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if(php==null){
                console.log("Php not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.DELETE_PHP_MESSAGE, phpId);
                response.message = process.env.DELETED_SUCCESSFULLY;
            }
            resp.status(response.status).json(response.message);
        })
    }
}

let update = function (req, res) {

    const phpUpdate = {
        name: req.body.name,
        language: req.body.language
    }

    console.log(phpUpdate);

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log(process.env.INVALID_ID_MESSAGE, phpId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, phpId });
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            }else if(php==null){
                console.log("Php not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            } else {
                console.log(process.env.PHP_FOUND);
                php.name = phpUpdate.name;
                php.language = phpUpdate.language;
                php.save(function (err) {
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

    const phpUpdate = {
        name: req.body.name,
        language: req.body.language,
        genre: req.body.genre,
        presentYear: req.body.presentYear,
        review: req.body.review,
        cast: req.body.cast
    }

    console.log(phpUpdate);

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log(process.env.INVALID_ID_MESSAGE, phpId);
        res.status(process.env.INTERNAL_SERVER_ERROR_STATUS_CODE)
            .json({ 'message': process.env.INVALID_ID_MESSAGE, phpId });
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log(process.env.ERROR, err);
                response.status = process.env.INTERNAL_SERVER_ERROR_STATUS_CODE;
                response.message = process.env.INTERNAL_SERVER_ERROR;
            } else if(php==null){
                console.log("Php not found");
                response.message = process.env.CONTENT_NOT_FOUND;
                response.status = process.env.CONTENT_NOT_FOUND_STATUS_CODE;
            }else {
                console.log(process.env.PHP_FOUND);
                php.name = phpUpdate.name;
                php.language = phpUpdate.language;
                php.genre=phpUpdate.genre;
                php.presentYear=phpUpdate.presentYear;
                php.review=phpUpdate.review;
                php.cast=phpUpdate.cast;
                php.save(function (err) {
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



    module.exports = { getAll, getPhpById, save, deletePhp,update,updateAll }