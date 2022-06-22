let getAll=function(req,res){
    res.status(200);
    res.json({'message':'get'});
}

let post=function(req,res){
    res.status(200);
    res.json({'message':'post'});
}

module.exports={getAll,post}



