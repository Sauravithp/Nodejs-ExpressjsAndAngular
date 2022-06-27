const mongoose=require("mongoose");
require("dotenv").config();


let reviewSchema=new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    description: String,
    publisher: publisherSchema
});

let publisherSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    country: String,
    location:{
        coordinates:{
        type:[Number],
        index:"2dsphere"
        }
    },
    established: Number
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



mongoose.model(process.env.MODEL_NAME,seriesSchema,process.env.DATABASE_COLLECTION_NAME);