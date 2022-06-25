const mongoose=require("mongoose");

const Game=mongoose.model("Game");

const response={
    status: 200,
    message: "Return successfully"
};

const getAll=function(req,res){
    const count=parseInt(req.query.count,10);
    const offset=parseInt(req.query.offset,10);
    Game.find().skip(offset).limit(count).exec(function(err,games){
        if(err){
            console.log("Err",err);
            res.status(500).json({'message':"Internal Server Error"});
        }else{
            console.log("Games Found");
            res.status(response.status).json({'message':games});
        }
    });
};

module.exports={getAll}