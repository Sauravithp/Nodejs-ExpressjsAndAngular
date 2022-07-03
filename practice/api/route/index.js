const express=require("express");
const Router=express.Router();
const gameRouter=require("./gameRoute")

Router.use("/games",gameRouter);

module.exports=Router;