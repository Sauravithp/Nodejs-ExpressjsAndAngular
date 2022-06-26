const express = require("express");
const Router = express.Router();
require("dotenv").config();
const phpController = require("../controllers/phpController.js");

Router.route(process.env.PHP_URL)
    .get(phpController.getAll)
    .post(phpController.save);

Router.route(process.env.PHP_URL+process.env.PATH_ID_PARAMS)
    .get(phpController.getPhpById)
    .delete(phpController.deletePhp)
    .patch(phpController.update)
    .put(phpController.updateAll);

module.exports = Router;