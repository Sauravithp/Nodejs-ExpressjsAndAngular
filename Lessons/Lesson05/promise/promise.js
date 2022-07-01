// const promise1=new Promise((resolve,reject)=>{
//     let number=Math.random();
//     setTimeout(()=>{
//         if(number >0.5){
//             resolve(number);
//         }else{
//             reject("Promise 1 failed");
//         }
//     },2000);
// });


// const promise2=new Promise((resolve,reject)=>{
//     let number=Math.random()+0.5;
//     setTimeout(()=>{
//         if(number >0.5){
//             resolve(number);
//         }else{
//             reject("Promise 2 failed");
//         }
//     },1000);
// });


// const promise3=new Promise((resolve,reject)=>{
//     let number=Math.random()-0.5
//     setTimeout(()=>{
//         if(number >0.5){
//             resolve(number);
//         }else{
//             reject("Promise 3 failed");
//         }
//     },5000);
// });


const promise2Sec = new Promise((resolve, reject) => {
    let number = Math.random() - 0.5
    setTimeout(() => {
        // if(number >0.5){
        //     resolve(number);
        // }else{
        //     reject("Promise 3 failed");
        // }
        resolve("Done in 2 seconds");
    }, 2000);
});

const promise1Sec = new Promise((resolve, reject) => {
    let number = Math.random() - 0.5
    setTimeout(() => {
        // if(number >0.5){
        //     resolve(number);
        // }else{
        //     reject("Promise 3 failed");
        // }
        resolve("Done in 1 seconds");
    }, 1000);
});


//////////////////


// promise1
// .then((data)=>{
//     console.log("then called",data);
//     console.log(promise1);

// })
// .catch((error)=>{
//     console.log("catch called",error);
//     console.log(promise1);
// });

// console.log(promise1);



// promise2
// .then((data)=>{
//     console.log("then called",data);
//     console.log(promise1);

// })
// .catch((error)=>{
//     console.log("catch called",error);
//     console.log(promise1);
// });

// promise3
// .then((data)=>{
//     console.log("then called",data);
//     console.log(promise1);

// })
// .catch((error)=>{
//     console.log("catch called",error);
//     console.log(promise1);
// });


// Promise.all([promise1,promise2,promise3])
// .then((value)=>{
//      console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });


// Promise.race([promise1,promise2,promise3])
// .then((value)=>{
//      console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });


function call1secPromise() {
   return promise1Sec.then((value) => {
        console.log(value);
    });
}


function call2secPromise() {
   return  promise2Sec.then((value) => {
        console.log(value);
    });
}


 async function main() {
    console.log("App Start");
    console.log("1 sec");
    console.log("2 sec");

    await call1secPromise();
    await call2secPromise();
    console.log("2 Sec");
    console.log("1 Sec");

    console.log("App end");

}



main();


















// //////////////////