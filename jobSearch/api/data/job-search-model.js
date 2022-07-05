const mongoose=require("mongoose");
require("dotenv").config();


const locationSchema=new mongoose.Schema({
    title: {
       type: String,
       required: true
    }
        ,
    coordinates:[Number]
});

const jobSearchSchema=mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    salary:Number,
    location: locationSchema,
    postDate: Date,
    // description: String,
    // experience: String,
    // skill:[String]
});

mongoose.model("JobSearch",jobSearchSchema,process.env.DATABASE_SCHEMA)