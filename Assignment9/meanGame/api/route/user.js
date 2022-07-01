const express = require("express");
const router = express.Router();
const userController=require("../controllers/userController");
require("dotenv").config();

router.route("")
    .post(userController.adduser);

module.exports = router;




