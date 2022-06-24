const dbConnection = require("../data/dbconnection");
const ObjectId= require('mongodb').ObjectId; 


const getAll = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10);
    }

    const db = dbConnection.get();
    const gamesCollection = db.collection("meanGames");

    gamesCollection.find().skip(offset).limit(count).toArray(function (err, docs) {
        if (err) {
            console.log("debug err: ", err);
            res.status(200).json({ 'error': err });
        }
        console.log("Found games", docs);
        res.status(200).json(docs);
    });
}

const post = function (req, res) {

    const newGame = req.body;

    if (newGame.title==null) {
        res.status(200).json({ 'message': 'title  missing' });
    }


    if (newGame.price==null) {
        res.status(200).json({ 'message': 'price missing' });
    }
    
    newGame.title=req.body.title;
    newGame.price=parseFloat(req.body.price,10);
    newGame.minPlayers=parseInt(req.body.minPlayers,10);
    newGame.minAge=parseInt(req.body.minAge,10);

    console.log("body---->", newGame);

    


    if (newGame.minPlayers<6 || newGame.minPlayers>11) {
        console.log(newGame.minPlayers, newGame.maxPlayers);
        res.status(200).json({ 'message': 'Number of players must be between 6-11' });
    }

    if (newGame.maxPlayers<=6 || newGame.maxPlayers>11) {
        console.log(newGame.minPlayers, newGame.maxPlayers);
        res.status(200).json({ 'message': 'Number of players must be between 6-11' });
    }

    if (newGame.minAge< 6 || newGame.minAge>99) {
        res.status(200).json({ 'message': 'players age must be between 6-99' });
    }

    const db = dbConnection.get();
    const gamesCollection = db.collection("meanGames");

    gamesCollection.insertOne(newGame, function (err, response) {
        if (err) {
         console.log("err->",err);
         res.status(200).json({'message':'Internal Server error'});
        }
        console.log(response);
        res.status(200).json({ 'result': response });
    });

}

const deleteGame=function(req,res){

    const objectId=req.params.id;
    const db = dbConnection.get();
    const gamesCollection = db.collection("meanGames");
    if(objectId===null){
        res.status(200).json({'message':'Delete Id missing'});
    }

    gamesCollection.deleteOne({_id:ObjectId(objectId)},function(err,response){
        if (err) {
            console.log("err->",err);
            res.status(200).json({'message':'Internal Server error'});
           }
           res.status(200).json({'result':response});

    });


}


module.exports = { getAll, post,deleteGame }



