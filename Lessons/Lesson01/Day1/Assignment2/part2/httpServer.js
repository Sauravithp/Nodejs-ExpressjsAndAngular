const http = require("http");
let routing=require("./routing");

let startingPage = function (req, res) {
    routing(req,res);
}

const server = http.createServer(startingPage);

server.listen(3434, "localhost", function () {
    console.log("Server Running at port 3434");
})