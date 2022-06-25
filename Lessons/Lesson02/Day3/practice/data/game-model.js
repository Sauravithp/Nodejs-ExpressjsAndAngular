const mongoose=require("mongoose");

let gameSchema=mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "year": Number,
    "rate": {
        type: Number,
        min: 1,
        max: 5,
        default: 2.5
    },
    "minPlayers": {
        type: Number,
        min: 1,
        max: 11,
        default: 6
    },
    "maxPlayers": {
        type:Number,
        min: 1,
        max:11,
        deafult: 11
    },
    "price":Number,
    "publisher": publisherSchema,
    "reviews": String,
    "minAge": {
        type: Number,
        min: 6,
        max: 99
    },
    "designers": [String]
});


let publisherSchema=mongoose.Schema({
    name: String,
    location:[locationSchema]
});

let locationSchema=mongoose.Schema({
    coordinates:[Number]
});

mongoose.model("Game",gameSchema,"meanGames");