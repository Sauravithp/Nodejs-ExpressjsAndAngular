require("dotenv").config();

module.exports=function(req,res){
 res.status(200);
 res.json({'message':"This is json response for path /json"});
}