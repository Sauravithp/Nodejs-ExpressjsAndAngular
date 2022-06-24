const mongoose = require("mongoose");
require("./games-model.js");

mongoose.connect("mongodb://localhost:27017/mwa");

mongoose.connection.on("connected", function () {
    console.log("Mongoose connected to", " mwa");
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose disconnected to", " mwa");
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