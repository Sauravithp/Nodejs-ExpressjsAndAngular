const express=require("express");
const router=express.Router();
const studentController=require("../controller/studentController.js")


router.route("/students")
.get(studentController.getAll)
.post(studentController.add);

router.route("/sstudents/:id")
.get(studentController.getOne)


module.exports=router;