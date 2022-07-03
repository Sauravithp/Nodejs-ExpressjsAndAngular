const mongoose=require("mongoose");
require("dotenv").config();
require("./job-opening-model")

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to db");
})

mongoose.connection.on("disconnected",function(){
    console.log("Mongoose disconnected to db");
});

mongoose.connection.on("error",function(){
    console.log("Error in mongoose");
})


process.on('SIGINT',function(){
    mongoose.connection.close(function(){
    console.log("process log");
    process.exit(0);
    });
});
