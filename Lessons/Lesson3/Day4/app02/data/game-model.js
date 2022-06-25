const mongoose=require("mongoose");

const gameSchema=mongoose.Schema({
    "title":  {
        type: String,
       required: true
    },
    "year": Number,
    "rate":  {
        type: Number,
        min: 6,
        max: 99
    },
    "minPlayers": {
        type: Number,
        min: 6,
        max: 99
    },
    "maxPlayers": {
        type: Number,
        min: 6,
        max: 99
    },
    "price":Number,
    "minAge": {
        type: Number,
        min: 6,
        max: 99
    },
    "designers": [String]
});

mongoose.model("Game",gameSchema,"meanGames");