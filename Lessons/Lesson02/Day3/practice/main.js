require("./data/dbConnection.js").open();
require("./data/db.js");

const express=require("express"); //import use
const app=express();
require("dotenv").config();

const gameRouter=require("./route/gameRouter.js")//import

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server=app.listen(process.env.PORT,function(){
    const portNumber=server.address().port;
    console.log(process.env.START_MSG,portNumber);
});


app.use("/api",gameRouter)

