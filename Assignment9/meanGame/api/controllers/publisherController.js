const e = require("express");
const mongooose = require("mongoose");
const GAME = mongooose.model("Game");


let create = function (req, res) {
    const gameId = req.params.gameId;
    let response = {
        status: 200,
        message: ''
    }

    if (!mongooose.isValidObjectId(gameId)) {
        console.log("invalid game id in publisher create,gameId: ", gameId);
        res.status(500).json({ 'messgae': 'Invalid game id' });
    } else {

        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("Internal server error in create api publisher")
                response.message = 'Internal Server error';
                response.status = 500;
            } else if (!game) {
                console.log('Game not found in create api');
                response.status = 404;
                response.message = 'Game not found';
            }
            else {
                game.publisher = req.body;
                game.save(function (err, publisher) {
                    if (err) {
                        console.log("err", err);
                        response.status = 500;
                        response.message = "Internal server error"
                    } else {
                        response.message = publisher;
                        response.status = 201
                    }

                    res.status(response.status).message(response.message);
                });

            }
            if (response.status != 201) {
                res.status(response.status).json(response.message);
            }

        });

    }
}


let getPublisher = function (req, res) {
    const gameId = req.params.gameId;

    let response = {
        status: 200,
        message: ''
    }

    response = __invalidId(response, gameId);
    if (response.status == 500) {
        console.log("Invalid id in getAll");
        res.status(response.status).json(response.message);
    } else {
        GAME.findById(gameId).select("publisher").exec(function (err, publisher) {
            if (err) {
                response = __errorChecking(response);
            } else if (!publisher) {
                response = __contentNotFound(response)
            } else {
                console.log("Publisher found")
                response.status = 200;
                response.message = publisher;
            }
            res.status(response.status).json(response.message);
        });
    }
}

let fullUpdate = function (req, res) {

    const gameId = req.params.gameId;

    let respnse = {
        status: 200,
        message: ''
    }

    respnse = __invalidId(respnse, gameId);
    if (respnse == 500) {
        console.log("invalid game id:", gameId)
        res.status(respnse.status).json(respnse.message);
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("err", err);
                respnse = __errorChecking(respnse);
            } else if (!game) {
                console.log("Game not found in full update");
                respnse = __contentNotFound(respnse);
            } else {
                console.log("Game found");
                game.publisher.name = req.body.name;
                game.publisher.location.coordinates = req.body.location.coordinates;
                game.save(function (err, game) {
                    if (err) {
                        console.log("err", err)
                        respnse = __errorChecking(respnse)
                    } else {
                        console.log("full update successfull");
                        respnse.status = 200;
                        respnse.message = game;
                    }
                    res.status(respnse.status).json(respnse.message);
                });
            }
            if (respnse.status != 200) {
                res.status(respnse.status).json(respnse.message);
            }
        })
    }

}

let partialUpdate = function (req, res) {

    const gameId = req.params.gameId;

    let respnse = {
        status: 200,
        message: ''
    }

    respnse = __invalidId(respnse, gameId);
    if (respnse == 500) {
        console.log("invalid game id:", gameId)
        res.status(respnse.status).json(respnse.message);
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("err", err);
                respnse = __errorChecking(respnse);
            } else if (!game) {
                console.log("Game not found in full update");
                respnse = __contentNotFound(respnse);
            } else {
                console.log("Game found");
                if (req.body.name) {
                    game.publisher.name = req.body.name;
                }
                if (req.body.location.coordinates) {
                    game.publisher.location.coordinates = req.body.location.coordinates;

                }
                game.save(function (err, game) {
                    if (err) {
                        console.log("err", err)
                        respnse = __errorChecking(respnse)
                    } else {
                        console.log("full update successfull");
                        respnse.status = 200;
                        respnse.message = game;
                    }
                    res.status(respnse.status).json(respnse.message);
                });
            }
            if (respnse.status != 200) {
                res.status(respnse.status).json(respnse.message);
            }
        })
    }

}

let deleteById = function (req, res) {

    const gameId = req.params.gameId;
    let response = {
        status: 200,
        message: ''
    }

    response = __invalidId(response, gameId);
    if (response.status == 500) {
        console.log("Invalid game id in delete publisher");
        res.status(response.status).json(response.message);
    } else {
        GAME.findById(gameId).exec(function (err, game) {
            if (err) {
                console.log("err", err)
                response = __errorChecking(response);
            } else if (!game) {
                console.log("Content not found in delete publisher by gameId");
                response = __contentNotFound(response);
            } else {
                console.log("game found");
                game.publisher = {};
                game.save(function (err, updatedGame) {
                    if (err) {
                        response = __errorChecking(response);
                    } else {
                        console.log("publisher delete")
                        response.status = 200;
                        response.message = updatedGame;
                    }
                    res.status(response.status).json(response.message);
                })
            }
            if (response.status != 200) {
                res.status(response.status).json(response.message);
            }

        });
    }

}

const __invalidId = function (response, gameId) {
    if (!mongooose.isValidObjectId(gameId)) {
        response.status = 500;
        response.message = "Internal Server Error"
    }

    return response;
}

const __errorChecking = function (response) {
    console.log("Internal Server Error");
    response.status = 500;
    response.message = "Internal Server Error";
    return response;
}

const __contentNotFound = function (response) {
    console.log("Contetn not found");
    response.status = 404;
    response.message = "Content not found";
    return response;
}

module.exports = {
    create,
    getPublisher,
    fullUpdate,
    partialUpdate,
    deleteById
}