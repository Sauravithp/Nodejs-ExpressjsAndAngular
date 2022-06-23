let gamesData=require("../public/data/games.json")

let getAll=function(req,res){
   res.status(200);
   res.json(gamesData);
}

module.exports={getAll};