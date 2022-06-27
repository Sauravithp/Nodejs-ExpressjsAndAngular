const mongooose=require("mongoose");
const GAME=mongooose.model("Game");
require("dotenv").config();


const getAll = function (req, res) {

    const response={
        status:200,
        message:''
    };

    let offset = 0;
    let count = 5;

    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10);
    }

    GAME.find().skip(offset).limit(count).exec(function(err,games){
        if(err){
            console.log("Internal Server error in game Controller getAll");
            response.status=500;
            response.message="Internal Server error";
        }else if(!games){
            console.log("games not found in game controller getAll");
            response.status=404;
            response.message="Games not found";
        }else{
            console.log("Inside getAll gameController, games found")
            response.status=200;
            response.message=games;
        }
        res.status(response.status).json(response.message);
    });

   
}

const addNewGame = function (req, res) {
    const newGame = req.body;
    console.log("request body", newGame);
    if (newGame.title == null) {
        res.status(200).json({ 'message': 'title  missing' });
        return;
    }

    if (newGame.price == null) {
        res.status(200).json({ 'message': 'price missing' });
        return;
    }

    newGame.title = req.body.title;
    newGame.price = parseFloat(req.body.price, 10);
    newGame.minPlayers = parseInt(req.body.minPlayers, 10);
    newGame.minAge = parseInt(req.body.minAge, 10);

    if (newGame.minPlayers < 6 || newGame.minPlayers > 11) {
        console.log("minplayer->", newGame.minPlayers);
        res.status(process.env.STATUS_OK).json({ 'message': 'Number of players must be between 6-11' });
        return;
    }

    if (newGame.maxPlayers <= 6 || newGame.maxPlayers > 11) {
        console.log("maxPlayer->", newGame.maxPlayers);
        res.status(process.env.STATUS_OK).json({ 'message': 'Number of players must be between 6-11' });
        return;
    }

    if (newGame.minAge < 6 || newGame.minAge > 99) {
        console.log("min age->", newGame.minAge);
        res.status(process.env.STATUS_OK).json({ 'message': 'players age must be between 6-99' });
        return;
    }

    const db = dbConnection.get();
    const gamesCollection = db.collection(process.env.DATABASE_COLLECTION_NAME);

    gamesCollection.insertOne(newGame, function (err, response) {
        if (err) {
            console.log("err->", err);
            res.status(process.env.STATUS_OK).json({ 'message': 'Internal Server error' });
        }
        console.log(response);
        res.status(process.env.STATUS_OK).json({ 'result': response });
    });
    console.log("Add new games completed");
}

const deleteGame = function (req, res) {
    const objectId = req.params.id;
    const db = dbConnection.get();
    const gamesCollection = db.collection(process.env.DATABASE_COLLECTION_NAME);
    if (objectId === null) {
        res.status(process.env.STATUS_OK).json({ 'message': 'Delete Id missing' });
        return;
    }

    gamesCollection.deleteOne({ _id: ObjectId(objectId) }, function (err, response) {
        if (err) {
            console.log("err->", err);
            res.status(process.env.STATUS_OK).json({ 'message': 'Internal Server error' });
            return;
        }
        res.status(process.env.STATUS_OK).json({ 'result': response });
    });


}


module.exports = { getAll, addNewGame, deleteGame }



