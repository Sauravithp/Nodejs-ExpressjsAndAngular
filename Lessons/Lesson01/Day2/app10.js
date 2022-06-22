const express=require("express");
require("dotenv").config;

console.log("1: App started");

const app=express();

const server=app.listen(process.env.PORT,function(){
    const port=server.address().port;
    console.log(process.env.START_MSG,port);
})

console.log("2: App Ended");