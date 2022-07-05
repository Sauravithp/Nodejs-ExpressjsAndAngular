require("./data/db.js");
const express=require("express");
require("dotenv").config();
const routes=require('./api/route');
const app=express();

app.use(express.json());
app.use(express.urlencoded({'extended':true}));

const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
});

app.use(process.env.API_URL,routes);


