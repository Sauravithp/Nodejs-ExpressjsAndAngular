require("./instantHello");

let talk=require("./talk");
talk.greeting();

let answer=require("./talk/question");
console.log(answer.ask("This is my question"));

talk.goodbye();
