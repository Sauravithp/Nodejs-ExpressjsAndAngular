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
            res.status(500).json({ 'message': "Internal Server Error" });
        } else {
            console.log("PHP found");
            res.status(response.status).json({ 'message': php });

        }
    });
}

let getPhpById = function (req, res) {

    const phpId = req.params.id;
    if (mongoose.isValidObjectId(phpId)) {
        console.log("Invalid id: ", phpId);
        res.status(500).json({ 'message': "Invalid id: ", phpId });
    } else {
        PHP.findById(phpId).exec(function (err, php) {
            if (err) {
                console.log("Error", err);
                res.status(500).json({ 'message': "Internal Server Error" });
            } else {
                console.log("PHP found", php);
                res.status(response.status).json({ 'message': php });
            }
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

    PHP.create(php,function (err, php) {
        if (err) {
            console.log("Error", err);
            res.status(response.status).json({ 'message': 'Internal Server Error' });
        } else {
            console.log("save new php");
            res.status(201).json({ 'result': php });
        }
    });

}

let deletePhp=function(req,resp){

    const phpId=req.params.id;
    if(mongoose.isValidObjectId(phpId)){
       console.log("Object ID not valid",phpId);
       resp.status(500).json({'message':"Object ID not valid",phpId});
    }else{
        PHP.findByIdAndDelete(phpId).exec(function(err,php){
            if(err){
                console.log("Error",err);
                resp.status(500).json({'message':"Invalid id:",phpId});
            }else{
                console.log("Delete php",phpId);
                resp.status(200).json({ 'result': php });
            }
        })
    }
}

module.exports = { getAll, getPhpById, save,deletePhp}