let fibonacci=require("./fibonacci");

let fib=function(){
    console.log(fibonacci(-15));
    console.log(fibonacci(30));
}

console.log("1: App starts");

setTimeout(fib,3000);

console.log("2: App Ends");

