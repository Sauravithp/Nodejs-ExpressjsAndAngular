require("./data/db");
require("./data/dbconnection").open();
require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./route/routes.js");


const server=app.listen(process.env.PORT, function () {
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
})

app.use(process.env.FORWARD_SLASH, express.static(path.join(__dirname, process.env.EXPRESS_PUBLIC_FOLDER)));

app.use(process.env.API_URL, routes);




