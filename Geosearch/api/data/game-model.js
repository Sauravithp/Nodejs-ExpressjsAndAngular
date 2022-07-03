const mongoose=require("mongoose");

const publisherschema=new mongoose.Schema({
    name:String,
    location: {
        coordinates:[Number]
    }
});

const gameSchema=mongoose.Schema({
title:{
    type: String,
    require:true,
    unique:true
},
price:Number,
rate:Number,
yeaer:Number,
minAge:Number,
maxPlayers:Number,
minPlayers:Number,
designer:[Number],
publisher:publisherschema
});



mongoose.model("Game",gameSchema,"games")