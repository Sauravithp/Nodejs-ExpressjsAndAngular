const express=require("express");
const path=require("path");
require("dotenv").config();
const routes=require("./routes/defaultRouting.js");

const app=express();

const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.START_MESSAGE,portNumber);
});


app.use("/",routes);

app.use(express.static(path.join(__dirname,process.env.PUBLIC)))