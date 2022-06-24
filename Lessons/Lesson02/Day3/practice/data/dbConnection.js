const MongoClient=require("mongodb");
require("dotenv").config();

let __connection=null;

let open=function(){
    if(get()==null){
        MongoClient.connect(process.env.DATABASE_URL,function(error,client){
           if(error){
            console.log("Database Connection failure issue");
            return;
           }
           __connection=client.db(process.env.DATABASE_NAME);
        });
    }

}

let get=function(){
    return __connection;
}


module.exports={open,get};