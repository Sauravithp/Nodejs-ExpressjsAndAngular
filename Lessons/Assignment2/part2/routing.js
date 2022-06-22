const fs = require("fs");

function route(req, res) {
    switch (req.url) {
        case "/index":
            fs.readFile("index.html", function (err, buffer) {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            })
            break;

        case "/page1":
            fs.readFile("page1.html", function (err, buffer) {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            })
            break;

        case "/page2":
            fs.readFile("page2.html", function (err, buffer) {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            })
            break;

        default:
            deafultUrl(req, res);
            break;
    }
}

function deafultUrl(req, res) {
    let httpMethod = req.method;
    switch (httpMethod) {
        case "GET":
            fs.readFile("index.html", function (err, buffer) {
                res.setHeader("Content-Type", "text/html");
                res.writeHead(200);
                res.end(buffer);
            })
            break;
        case "POST":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end("{'message':'Hello World!!!!!'}");
            break;
    }
}


module.exports=route;