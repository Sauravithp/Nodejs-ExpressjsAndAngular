const mongoose=require("mongoose");


let reviewSchema=new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    description: String
});

let castSchema=new mongoose.Schema({
    name:String,
    gender: String
});

let seriesSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    language:[String],
    genre: String,
    presentYear: Number,
    review: [reviewSchema],
    cast: [castSchema]
});



mongoose.model("Series",seriesSchema,"series");