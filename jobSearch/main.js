require("./api/data/db");
const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const routes = require("./api/route");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","http://localhost:4200")
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PATCH,PUT")
    res.header("Access-Control-Allow-Headers","content-type")
    next();
})

app.use(function (req, res, next) {
    console.log(req.url, req.method);
    console.log(req.body);
    next();
});

app.use("/api", routes);

app.use(express.static(path.join(__dirname,"public")))

const server = app.listen(process.env.PORT, function () {
    const portNumber = server.address().port;
    console.log(process.env.START_MESSAGE, portNumber);
});
