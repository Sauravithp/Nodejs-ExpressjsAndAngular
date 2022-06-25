const mongoose = require("mongoose");
const PHP = mongoose.model("Series");
require("dotenv").config();

let response = {
    status: 200,
    message: "Success"
}


let getAll = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count);
    }
    PHP.find().skip(offset).limit(count).exec(function (err, php) {
        if (err) {
            console.log("Error", err);
            response.status = 500;
            response.message = "Internal Server Error";
        } else {
            console.log("PHP found");
            response.message = php;
        }
        res.status(response.status).json(response.message);
    });
}

let getPhpById = function (req, res) {

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log("Invalid id: ", phpId);
        res.status(500).json({ 'message': "Invalid id: ", phpId });
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log("Error", err);
                response.status = 500;
                response.message = "Internal Server Error";
            } else {
                console.log("PHP found", php);
                response.message = php;
            }
            res.status(response.status).json(response.message);
        });

    }
}


let save = function (req, res) {

    const php = {
        name: req.body.name,
        language: req.body.language,
        genre: req.body.genre,
        presentYear: req.body.presentYear,
        review: {
            rating: req.body.review.rating,
            description: req.body.review.description
        },
        cast: {
            name: req.body.cast.name,
            gender: req.body.cast.gender
        }
    }

    console.log(php);

    PHP.create(php, function (err, php) {
        if (err) {
            console.log("Error", err);
            response.status = 500;
            response.message = "Internal Server Error";
        } else {
            console.log("save new php");
            response.message = php;
        }
        res.status(response.status).json(response.message);
    });

}

let deletePhp = function (req, resp) {

    const phpId = req.params.id;
    if (!mongoose.isValidObjectId(phpId)) {
        console.log("Object ID not valid", phpId);
        resp.status(500).json({ 'message': "Object ID not valid", phpId });
    } else {
        PHP.findByIdAndDelete(phpId).exec(function (err, php) {
            if (err) {
                console.log("Error", err);
                response.status = 500;
                response.message = "Internal Server Error";
            } else {
                console.log("Delete php", phpId);
                response.message = php;
            }
            res.status(response.status).json(response.message);
        })
    }
}

module.exports = { getAll, getPhpById, save, deletePhp }