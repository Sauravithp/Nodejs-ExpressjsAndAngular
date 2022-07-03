const mongoose=require("mongoose")
require("./game-model.js")

mongoose.connect("mongodb://localhost:27017/games")

mongoose.connection.on("connected",function(){
    console.log("mongoose connected to dcb")
});

mongoose.connection.on("disconnected",function(){
    console.log("mongoose disconnected to db");
})

mongoose.connection.on("error",function(){
    console.log("mongoose error")
})

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("terminal isse mongoose closed");
        process.exit(0);
    })
})