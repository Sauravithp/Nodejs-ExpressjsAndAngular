const express=require("express");
const Router=express.Router();

const gameController=require("../controller/gameController.js");

Router.route("/games").get(gameController.getAll);

module.exports=Router;