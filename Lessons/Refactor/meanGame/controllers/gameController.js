const mongooose = require("mongoose");
const GAME = mongooose.model("Game");
require("dotenv").config();


const getAll = function (req, res) {

    const response = {
        status: 200,
        message: ''
    };

    let offset = 0;
    let count = 5;

    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10);
    }

    GAME.find().skip(offset).limit(count).exec(function (err, games) {
        if (err) {
            console.log("Internal Server error in game Controller getAll");
            response.status = 500;
            response.message = "Internal Server error";
        } else if (!games) {
            console.log("games not found in game controller getAll");
            response.status = 404;
            response.message = "Games not found";
        } else {
            console.log("Inside getAll gameController, games found")
            response.status = 200;
            response.message = games;
        }
        res.status(response.status).json(response.message);
    });


}

const getById = function (req, res) {
    const gameId = req.params.id;

    const response = {
        status: 200,
        message: ''
    }

    if (!mongooose.isValidObjectId(gameId)) {
        console.log("Game id invalid ", gameId);
        res.status(500).json({ 'message': 'Invalid id: ', gameId });
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("err", err)
                response.status = 500;
                response.message = "Internal Server error";
            } else if (!game) {
                console.log("game not found by id: ", gameId);
                response.status = 404;
                response.message = "Game not found"
            } else {
                console.log("Game found");
                response.message = game;
            }
            res.status(response.status).json(response.message);
        });

    }

}

const addNewGame = function (req, res) {

    const response = {
        status: 200,
        message: ''
    };

    const newGame = req.body;
    console.log("request body", newGame);

    newGame.title = req.body.title;
    newGame.price = parseFloat(req.body.price, 10);
    newGame.minPlayers = parseInt(req.body.minPlayers, 10);
    newGame.minAge = parseInt(req.body.minAge, 10);


    GAME.create(newGame, function (err, saved) {
        if (err) {
            console.log("Internal Server error in game Controller getAll");
            response.status = 500;
            response.message = "Internal Server error";
        } else if (!saved) {
            console.log("games not found in game controller getAll");
            response.status = 404;
            response.message = "Games not found";
        } else {
            console.log("Game created")
            response.status = 200;
            response.message = saved;
        }
        res.status(response.status).json(response.message);
    });


    console.log("Add new games completed");
}

const deleteGame = function (req, res) {
    const objectId = req.params.id;
    if (!mongooose.isValidObjectId(objectId)) {
        res.status(500).json({ 'message': 'Inavlid id', objectId });
    } else {

        GAME.findByIdAndDelete(objectId).exec(function (err, response) {
            if (err) {
                console.log("err->", err);
                res.status(process.env.STATUS_OK).json({ 'message': 'Internal Server error' });
                return;
            }
            res.status(process.env.STATUS_OK).json({ 'result': response });
        });
    }
}

let fullUpdate = function (req, res) {

    console.log(req.body)
    const gameId = req.params.id;
    const response = {
        status: 200,
        message: ''
    }

    if (!mongooose.isValidObjectId(gameId)) {
        console.log('Inavlid found in update api');
        response.status(500).json({ 'message': 'Inavlid id found' });
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Internal server error in update games api");
                response.status = 500;
                response.message = "Internal server error";
            } else if (!game) {
                console.log("Game not found in update api");
                response.status = 404;
                response.message = "Game not found";
            } else {
                game.title = req.body.title;
                game.year = req.body.year;
                game.rate = req.body.rate;
                game.minPlayers = req.body.minPlayers;
                game.maxPlayers = req.body.maxPlayers;
                game.price = req.body.price;
                game.minAge = req.body.minAge;
                game.designers = req.body.designers;
                game.save(function (err, updateGame) {
                    if (err) {
                        console.log("err:", err);
                        response.status = 500;
                        response.message = "Internal server error";
                    } else {
                        response.status = 200;
                        response.message = updateGame;
                    }
                    res.status(response.status).json(response.message);
                });
            }
            if (!response.status == 200) {
                res.status(response.status).json(response.message);
            }
        });
    }

}

const partialUpdate = function (req, res) {

    const gameId = req.params.id;

    const response = {
        status: 200,
        message: ''
    }

    if (!mongooose.isValidObjectId(gameId)) {
        console.log("Inavlid id provided while partial update ");
        res.status(500).json({ 'messahge': 'Invalid id provided' });
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Internal server error inside find by id(partial update)");
                response.message = "Internal server error";
                response.status = 500;
            } else if (!game) {
                console.log("Game not found isnide find by id(partial update)");
                response.message = "Game not found";
                response.status = 404;
            } else {
                if (req.body.title) {
                    game.title = req.body.title;
                }
                if (req.body.year) {
                    game.year = req.body.year;
                }
                if (req.body.rate) {
                    game.rate = req.body.rate;
                }
                if (req.body.minPlayers) {
                    game.minPlayers = req.body.minPlayers;
                }
                if (req.body.maxPlayers) {
                    game.maxPlayers = req.body.maxPlayers;
                }
                if (req.body.minAge) {
                    game.minAge = req.body.minAge;
                }
                if (req.body.price) {
                    game.price = req.body.price;
                }
                if (req.body.designers) {
                    game.designers = req.body.designers;
                }

                game.save(function (err, updateGame) {
                    if (err) {
                        console.log("err", err);
                        response.status = 500;
                        response.message = "Internal server error";
                    } else if (!updateGame) {
                        console.log("error while updating partially ");
                        response.status = 500;
                        response.message = "Internal server error";
                    } else {
                        console.log("partially updated");
                        response.status = 200;
                        response.message = updateGame;
                    }

                    res.status(response.status).json(response.message);
                })
            }

            if(!response.status==200){
                res.status(response.status).json(response.message);
            }
        });

    }

}


module.exports = { getAll, getById, addNewGame, deleteGame, fullUpdate ,partialUpdate}



