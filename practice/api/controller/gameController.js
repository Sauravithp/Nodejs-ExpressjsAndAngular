const { response } = require("express");
const mongoose = require("mongoose");
const GAME = mongoose.model("Game");
require("dotenv").config();


const getAll = function (req, res) {

    const response = {
        status: 200,
        message: ""
    }

    let offset = 0;
    let count = 0;

    if (!req.query.offset && !req.query.count) {
        console.log("pagination cannot be empty");
        res.status(500).json({ "message": "Pagination cannot be empty/null" });
        return;
    } else {
        offset = req.query.offset;
        count = req.query.count;
        GAME.find().skip(offset).limit(count)
            .then((games) => {
                if (!games) {
                    console.log("Games not found");
                    fillResponse(response, 404, "content not found");
                } else {
                    fillResponse(response, 200, games)
                }
            })
            .catch((err) => fillResponse(response, 500, "Internal Server error"))
            .finally(() => sendResponse(response, res, req));
    }


}


const deleteById = function (req, res) {

    const gameId = req.params.gameId;
    const response = {
        status: 200,
        message: ''
    }
    if (!mongoose.isValidObjectId(gameId)) {
        console.log("Delete invalid game id", gameId)
        res.status(500).json({ "message": "Internal Server error" });
        return;
    } else {
        GAME.findByIdAndDelete(gameId).then((data) => {
            fillResponse(response, 200, "Game Deleted successfully");
        }).catch((err) => fillResponse(response, 500, "Internal Server Error"))
            .finally(() => sendResponse(response, res, req));
    }

}


const getById = function (req, res) {

    const gameId = req.params.gameId;

    const response = {
        status: 200,
        message: ""
    }

    if (!mongoose.isValidObjectId(gameId)) {
        console.log("Game id not found", gameId)
        res.status(500).json("Invalid game id");
        return;
    } else {
        GAME.findById(gameId).then((data) => {
            if (!data) {
                fillResponse(response, 404, "content not found");
            } else {
                fillResponse(response, 200, data)
            }
        }).catch((err) => fillResponse(response, 500, err))
        .finally(() => sendResponse(response, res, req));
    }

}

const fillResponse = function (response, status, message) {
    response.status = status;
    response.message = message;
}

const sendResponse = function (response, res) {
    res.status(response.status).json(response.message);
}

module.exports = {
    getAll, deleteById, getById
}