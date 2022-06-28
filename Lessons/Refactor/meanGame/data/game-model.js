const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
    "name": String,
    "location": {
        "coordinates": {
            type: [Number],
            required: true
        }
    }
});

const reviewSchema = new mongoose.Schema({
    rating: Number,
    description: String
});


const gameSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "year": Number,
    "rate": {
        type: Number,
        min: 1,
        max: 5
    },
    "minPlayers": {
        type: Number
    },
    "maxPlayers": {
        type: Number
    },
    "price": Number,
    "minAge": {
        type: Number,
    },
    "designers": [String],
    "publisher": publisherSchema,
    "review": [reviewSchema]
});

mongoose.model("Game", gameSchema, "meanGames");
