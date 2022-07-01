require("./api/data/db.js");
const express = require("express");
const routes = require("./api/route");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server=app.listen(process.env.PORT, function () {
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
})

app.use(process.env.API_URL,function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
});

app.use(process.env.FORWARD_SLASH, express.static(path.join(__dirname, process.env.EXPRESS_PUBLIC_FOLDER)));

app.use(process.env.API_URL, routes);




