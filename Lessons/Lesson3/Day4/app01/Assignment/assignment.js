require("./data/db");
require("./data/dbconnection").open();

const express = require("express");
const routes = require("./route/routes.js");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server=app.listen(process.env.PORT, function () {
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
})

app.use(process.env.FORWARD_SLASH, express.static(path.join(__dirname, process.env.EXPRESS_PUBLIC_FOLDER)));

app.use(process.env.API_URL, routes);




