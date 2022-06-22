const express=require("express");
const path=require("path");
require("dotenv").config();

console.log("1: App started");

const app=express();

app.get("/",function(req,res){
    console.log("GET RECEIVED");
    res.status(200);
    res.end("Received your GET request.");
});

app.get("/json",function(req,res){
    console.log("GET RECEIVED");
    res.status(200)
    .json({'message':true});
});

app.get("/file",function(req,res){
    console.log("GET RECEIVED");
    res.status(process.env.STATUS_OK)
    .sendFile(path.join(__dirname,"app10.js"));
});

const server=app.listen(process.env.PORT,function(){
    const port=server.address().port;
    console.log(process.env.START_MSG,port);
})

app.use(express.static(path.join(__dirname,process.env.EXPRESS_PUBLIC_FOLDER)));

console.log("2: App Ended");