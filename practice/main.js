require("./api/data/db");
const express=require("express");
const app=express();
require("dotenv").config();
const route=require("./api/route")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/",function(req,res,next){
    console.log(req.url,req.method);
    next();
})

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Header","content-type");
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,PATCH")
    next();
});

app.use("/api",route);

const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.STARTING_MESSAGE,portNumber)
});




