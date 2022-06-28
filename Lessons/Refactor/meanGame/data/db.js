const mongoose=require("mongoose");

require("./game-model.js");

mongoose.connect("mongodb://localhost:27017/mwa");

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to db");
});

mongoose.connection.on("disconnted",function(){
    console.log("Mongoose disconnected to db");
});

mongoose.connection.on("error",function(){
    console.log("Mongose error");
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose Connection closed");
        process.exit(0);
    });
});