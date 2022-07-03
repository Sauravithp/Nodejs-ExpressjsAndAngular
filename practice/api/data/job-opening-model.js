const mongoose=require("mongoose");
require("dotenv").config();

const gameSchema=mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    year:Number,
    rate:Number,
    price:Number,
    minAge:Number,
    maxPlayers:{
        type:Number,
        min: 5,
        max: 10
    },
    minPlayers:{
        type:Number,
        min: 5,
        max:10
    }
});

mongoose.model("Game",gameSchema,process.env.DATABSE_COLLECTION_NAME)