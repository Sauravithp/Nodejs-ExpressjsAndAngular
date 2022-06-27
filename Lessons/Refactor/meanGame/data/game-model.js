const mongoose=require("mongoose");

let reviewSchema=new mongoose.Schema({
         rating: Number,
         description: String
});


let publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: { coordinates: [Number] }
});

let gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: Number,
    price: {
        type: Number,
        required: true
    },
    type: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 11
    },
    maxPlayers: {
        type: Number,
        min: 1,
        max: 11
    },
    publisher: publisherSchema,
    reviews: [reviewSchema],
    minAge: {
        type: Number,
        min: 6,
        max: 99
    },
    designers: [String]
});

mongoose.model("Game", gameSchema, "meanGames");