const e = require("express");
const { query, response } = require("express");
const mongoose = require("mongoose");
const GAME = mongoose.model("Game");
require("dotenv").config();


const getAll = function (req, res) {

    const response = {
        status: 200,
        message: ""
    }

    let offset = 0;
    let count = 5;

    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10)
    } else {
        console.log("pagination missing")
        res.status(500).json({ "message": "pagination missing" })
        return;
    }

    GAME.find().skip(offset).limit(count)
        .then((games) => {
            console.log("game found")
            console.log("game found");
            response.status = 200;
            response.message = games;
        })
        .catch((err) => {
            console.log(err);
            response.status = 500;
            response.message = "Internal server error";
        })
        .finally(() => {
            console.log(response.status, response.message);
            res.status(response.status).json(response.message);
        });
}

const getOne = function (req, res) {

    console.log("get one");

    const response = {
        status: 200,
        message: ''
    }

    const gameId = req.params.id;

    if (!mongoose.isValidObjectId(gameId)) {
        console.log("Invalid gameId")
        res.status(500).json({ 'message': 'Inavlid game Id' });
        return;
    } else {
        GAME.findById(gameId)
            .then((data) => {
                if (data) {
                    fillResponse(response, 200, data)
                }
                else {
                    fillResponse(response, 400, "Game not found")
                }
            })
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => sendResponse(req, res, response));
    }

}

const save = function (req, res) {
    console.log("inside save");
    let newGame = new GAME(req.body)
    console.log(newGame);

    const response = {
        status: 200,
        message: ''
    }
    if (req.body) {
        console.log("save")
        GAME.create(newGame)
            .then((data) => fillResponse(response, 201, data))
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => res.status(response.status).json(response.message));
    } else {
        console.log("Req body empty")
        res.status(500).json({ 'message': 'Req body empty' });
        return;
    }

}

const deleteById = function (req, res) {
    const gameId = req.params.id;

    const response = {
        status: 200,
        message: ''
    }

    if (!mongoose.isValidObjectId(gameId)) {
        console.log("invalid delete id");
        return res.status(500).json({ 'message': 'Internal server error' });
    } else {
        GAME.findByIdAndDelete(gameId)
            .then((data) => fillResponse(response, 200, data))
            .catch((err) => fillResponse(response, 500, err))
            .finally(() => {
                console.log(response.status, response.message);
                console.log("finally");
                res.status(response.status).json(response.message);
            })
    }
}

const updatefull = function (req, res) {
    const newGame = new GAME(req.body);

    const response = {
        status: 200,
        message: ''
    }

    const gameId = req.params.id;
    if (!mongoose.isValidObjectId(gameId)) {
        console.log("Invalid object Id");
        return res.status(500).json({ 'message': 'Inavlid object id' });
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            game.title = newGame.title;
            game.rate = newGame.rate;
            game.price = newGame.price;
            game.minAge = newGame.minAge;
            game.maxPlayers = newGame.maxPlayers;
            game.minPlayers = newGame.minPlayers;
            game.save(function (err, data) {
                if (err) {
                    fillResponse(response, 500, err);
                } else {
                    return res.status(response.status).json(data);
                }
            })
            if (response.status != 200) {
                return res.status(response.status).json(response.message);
            }
        });
        if (response.status != 200) {
            return res.status(response.status).json(response.message);
        }
    }
}


const geoSearch = function (req, res) {

    console.log("geo search");

    const response = {
        status: 200,
        message: ""
    }

    let offset = 0;
    let count = 5;
    let lat = 0;
    let lng = 0;
    if (req.query.offset && req.query.count && req.query.lng && req.query.lat) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10)
        lat = parseFloat(req.query.lat)
        lng = parseFloat(req.query.lng)
        console.log(lat);
        console.log(lng);
    } else {
        console.log("pagination missing")
        res.status(500).json({ "message": "pagination missing" })
        return;
    }

    const point = {
        type: "Point",
        coordinates: [lat, lng]
    }
    console.log("point-->", point);

    const query = {
        'publisher.location.coordinates':
        {
            $near:
            {
                $geometry: point,
                $maxDistance: 1000,
                $minDistance: 0
            }
        }
    }

    console.log("query-->", query)
    GAME.find(query).skip(offset).limit(count)
        .then((games) => {
            console.log("game found")
            console.log("game found");
            response.status = 200;
            response.message = games;
        })
        .catch((err) => {
            console.log(err);
            response.status = 500;
            response.message = "Internal server error";
        })
        .finally(() => {
            console.log(response.status, response.message);
            res.status(response.status).json(response.message);
        });
}

const sendResponse = function (req, res, response) {
    console.log("Send response function");
    return res.status(response.status).json(response.message);
}

const fillResponse = function (response, status, message) {
    console.log(message);
    response.status = status;
    response.message = message;
}

module.exports = {
    getAll,
    save, getOne, deleteById, updatefull,
    geoSearch
}
