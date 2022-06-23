let addNumbers=function(req,res){
    const num1=req.params.num1;
    console.log(num1);
    const num2=parseInt(req.query.num2,10);
    console.log(num2);
    const result=num1+num2;
    console.log(result);
    res.status(200);
    res.send(result);
}

let divideNumbers=function(req,res){
    const num1=req.params.num1;
    console.log(num1);
    const num2=parseInt(req.query.num2,10);
    console.log(num2);
    const result=num1/num2;
    console.log(result);
    res.status(200);
    res.send(result);
}

module.exports={addNumbers};