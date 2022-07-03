const express=require("express");
const jobSearchRouter=require("./jobSearchRoute")
const router=express.Router();


router.use("/jobSearch",jobSearchRouter)

module.exports=router;