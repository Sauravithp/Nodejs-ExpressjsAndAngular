const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const routes = require("../MeanGame/route/gameRoute.js");

const server = app.listen(process.env.PORT, function () {
    const portNumber = server.address().port;
    console.log("Listening to port", portNumber);
});

app.use(function (req, res, next) {
    console.log(req.url, req.method);
    next();
});

app.use("/api", routes);

app.use(express.static(path.join(__dirname,process.env.PUBLIC_FOLDER,process.env.HTML_FOLDER)));
