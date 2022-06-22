const filename="talk.js";

const intro=function(){
console.log("I'm a node file called talk.js");
}

const goodbye=function(){
    console.log("Good Bye!!!!!");
}

module.exports={
    greeting: intro,
    goodbye
}