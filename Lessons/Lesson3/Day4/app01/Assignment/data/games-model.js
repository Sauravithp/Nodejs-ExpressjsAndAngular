const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    // path -> types
    "title": {
        type: String,
        required: true
    },
    "year": Number,
    "rate": {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    "minPlayers":  {
        type: Number,
        min: 1,
        max: 11,
        default: 1
    },
    "maxPlayers": {
        type: Number,
        min: 1,
        max: 11,
        default: 1
    },
    "minAge": Number,
    "price": Number,
    "designers": [String]
});

mongoose.model("Game",gameSchema,"meanGames");