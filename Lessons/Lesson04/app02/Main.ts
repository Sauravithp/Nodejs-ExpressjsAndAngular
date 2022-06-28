import {DE_Student} from "./DE_Student.js"

let jack: DE_Student=new DE_Student("Jack",3.5);

// console.log("hello, ",jack);
// console.log(jack.gpa);
// console.log(jack.getName());
for(const key in jack){
console.log(key);
};

console.log(jack['course']);
console.log("start");


console.log("Hello," , jack.getName());

console.log(jack.getName(),"is enrolled in",jack["course"]);
console.log(jack.getName(),"can you program?");
if(jack["canProgram"]){
    console.log(jack.getName(),"please progam");
    jack["program"]();
}else{
    console.log("Dont worry you'll learn after this course");
}

console.log("End");

