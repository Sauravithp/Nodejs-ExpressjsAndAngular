require("./data/db.js")
require("dotenv").config();
const express=require("express");
const path=require("path");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const gameRouter=require("./route/gameRoute.js");

const server=app.listen(3000,function(){
    const portNumber=server.address().port;
    console.log("Listening to port: ",portNumber);
});

app.use("/api",gameRouter);
