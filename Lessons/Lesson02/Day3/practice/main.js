require("./data/dbConnection.js").open();
const express=require("express");
const app=express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
});