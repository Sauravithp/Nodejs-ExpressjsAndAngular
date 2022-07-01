const express = require("express");
const router = express.Router();
const gameRouts=require("../route/games");
const userRouts=require("../route/user");

require("dotenv").config();

router.use("/games",gameRouts);
router.use("/users",userRouts);

module.exports = router;




