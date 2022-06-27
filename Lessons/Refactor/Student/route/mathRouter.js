const express=require("express");
const router=express.Router();
const mathController=require("../controller/mathController.js");

router.route("/add/:num1").get(mathController.addNumbers)
router.route("/divide/:num1").get(mathController.divideNumbers)


module.exports=router;