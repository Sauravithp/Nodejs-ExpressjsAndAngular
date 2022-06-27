const mongoose=require("mongoose");
require("./game-model.js");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected with database");
});

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected with database");
});

mongoose.connection.on("error",function(){
    console.log("Mongoose facing error while connection");
});

process.on('SIGINT',function(){
    console.log("inside process.on in db.js")
    mongoose.connection.close(function(){
        console.log("Program termination leading to mongoose disconnection")
        process.exit(0);
    })
});