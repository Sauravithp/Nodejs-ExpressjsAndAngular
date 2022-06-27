const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mwa")

mongoose.connection.on("connected",function(){
    console.log("")
});