const mongoose = require("mongoose");
require("./games-model.js");

mongoose.connect("mongodb://localhost:27017/games");

mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to", " games");
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected to", " games");
});

mongoose.connection.on("error", function () {
    console.log("error in mongoose");
});

process.on("SIGINT", function () {
    mongoose.connection.close(function(){
        console.log("mongoose disconnected by app termination");
        process.exit(0);
    });
});