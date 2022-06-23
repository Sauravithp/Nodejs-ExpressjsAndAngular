require("./data/dbconnection").open();
const express = require("express");
const routes = require("./route/routes.js");
const path = require("path");

require("dotenv").config();

const app = express();

app.listen(process.env.PORT, function () {
    console.log("Listening to port", process.env.PORT);
})

app.use("/", express.static(path.join(__dirname, process.env.EXPRESS_PUBLIC_FOLDER)));

app.use("/api",routes);




