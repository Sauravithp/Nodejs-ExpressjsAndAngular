const http=require("http");
const fs=require("fs");

console.log("1: App start");

const helloWorld=function(req,res){
res.writeHead(200);
res.end("Hello World");
}

const sendIndexAndServe=function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    const buffer=fs.readFileSync("index.html");
    res.end(buffer);

}

const server=http.createServer(sendIndexAndServe);

server.listen(8080,"localhost",function(){
    console.log("server is running on http://localhost:8080");
})

console.log("3: App end")