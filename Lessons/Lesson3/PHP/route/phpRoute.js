const express = require("express");
const Router = express.Router();
require("dotenv").config();
const phpController = require("../controllers/phpController.js");

Router.route("/php")
    .get(phpController.getAll)
    .post(phpController.save)

Router.route("/php/:id")
    .get(phpController.getPhpById)
    .delete(phpController.deletePhp)

module.exports = Router;