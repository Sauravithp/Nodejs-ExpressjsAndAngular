const mongoose=require("mongoose");
require("./game-model.js");


mongoose.connect("mongodb://localhost:27017/mwa");

mongoose.connection.on("connected",function(){
       console.log("Mongoose connected to","mwa");
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected to","mwa");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose error");
});

process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose connection closed");
        process.exit(0);
    });
});
