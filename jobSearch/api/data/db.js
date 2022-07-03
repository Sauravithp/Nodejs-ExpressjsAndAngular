const mongoose=require("mongoose")
require("dotenv").config();
require("./job-search-model")

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to database")
})

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected to database");
})

mongoose.connection.on("error",function(){
    console.log("Mongoose connection error");
})

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose connection closed");
        process.exit(0);
    })
})