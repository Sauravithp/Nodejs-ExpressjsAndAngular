const express=require("express");
const gameRoute=require("./gameRoute");
require("dotenv").config();

const router=express.Router();

router.use("/games",gameRoute);

module.exports=router;

