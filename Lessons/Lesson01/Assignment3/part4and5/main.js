const express=require("express");
const app=express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mathRouter=require("./route/mathRouter.js");
const studenttRouter=require("./route/studentRouter.js");


const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.START_MESSAGE,portNumber);
});

app.use("/maths",mathRouter);
app.use("/api",studenttRouter);








