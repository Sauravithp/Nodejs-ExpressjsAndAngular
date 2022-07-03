const express=require("express");
const { model } = require("mongoose");
const Router=express.Router();
const gameController=require("../controller/gameController")

Router.route("").get(gameController.getAll);

Router.route("/:gameId").delete(gameController.deleteById)
.get(gameController.getById);

module.exports=Router;