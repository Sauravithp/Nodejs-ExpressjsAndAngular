const dbConnection=require("../data/dbconnection");

const getAll = function (req, res) {
    const db=dbConnection.get();
    console.log("DB is",db);
    res.status(200);
    res.json(gamesData);
}

const post = function (req, res) {
    res.status(200);
    res.json({ 'message': 'post' });
}

const getOne = function (req, res) {
    let id=req.params.id;
    let result=gamesData[id];
    res.status(200);
    res.json(result);
}

// gamesData.slice(2,4)




module.exports = { getAll, post, getOne }



