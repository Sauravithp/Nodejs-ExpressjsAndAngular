const fs=require("fs");

const printFileFirstLine=function(error,buffer){
    console.log("2: Got the file.", buffer.toString().substring(0,21));
};

console.log("1: start app");

fs.readFile("largeFile.txt",printFileFirstLine);

const buffer=fs.readFileSync("largeFile.txt");

console.log("3: End app");