const mongoose=require("mongoose");
require("./game-model.js");


mongoose.connect("mongodb://localhost:27017/mwa");

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to db");
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected to db");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose error");
});

process.on('SIGINT',function(){
    mongoose.Connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});