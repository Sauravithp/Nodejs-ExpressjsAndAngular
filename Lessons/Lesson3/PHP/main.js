require("./data/db.js");
const express=require("express");
const path=require("path");
require("dotenv").config();


const app=express();

app.use(express.json());
app.use(express.urlencoded({'extended':true}));

const phpRoute=require('./route/phpRoute.js');

const server=app.listen(3000,function(){
    const portNumber=server.address().port;
    console.log("Listening to port: ",portNumber);
});

app.use("/api",phpRoute);


