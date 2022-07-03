require("./api/data/db.js")
const express=require("express");
require("dotenv").config();
const app=express();
const routes=require("./api/route/index")

const server=app.listen(3000,function(){
    const portNumber=server.address().port;
    console.log("Listeing to port", portNumber);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(function(req,res,next){

    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Acess-Control-Allow-Origin","http://localhost:4200");
    next();
})

app.use(function(req,res,next){
    console.log(req.url,req.method);
    next();
});

app.use("/api",routes);