const express=require("express");

const app=express();

const server=app.listen(3000,function(){
    const portNumber=server.address().port;
    console.log("Listening to port",portNumber);
})