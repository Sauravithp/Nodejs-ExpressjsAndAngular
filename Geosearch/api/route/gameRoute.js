const express=require("express");
const router=express.Router();
require("dotenv").config();
const gameController=require("../controller/gameController");

router.route("")
.get(gameController.getAll)
.post(gameController.save);


router.route("/geo")
.get(gameController.geoSearch)

router.route("/:id")
.get(gameController.getOne)
.delete(gameController.deleteById)
.put(gameController.updatefull);








module.exports=router;