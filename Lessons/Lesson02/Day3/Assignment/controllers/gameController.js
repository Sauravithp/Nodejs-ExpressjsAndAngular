const dbConnection = require("../data/dbconnection");

const db = function database() {
    return dbConnection.get();
};

const gamesCollection = function collection() {
    return db.collection("meanGames");
}



const getAll = function (req, res) {
    let offset = 0;
    let count = 5;
    if (req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10);
    }
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
    res.status(200);
    res.json({ 'message': 'post' });
}




module.exports = { getAll, post}



