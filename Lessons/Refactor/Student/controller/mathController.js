let addNumbers=function(req,res){
    const num1=req.params.num1;
    const num2=parseInt(req.query.num2,10);
    const result=num1+num2;
    res.status(200);
    res.send(result);
}

let divideNumbers=function(req,res){
    const num1=req.params.num1;
    const num2=parseInt(req.query.num2,10);
    const result=num1/num2;
    res.status(200);
    res.setHeader("Content-Type","application/json");
    res.json({'result':result});
}

module.exports={addNumbers,divideNumbers};