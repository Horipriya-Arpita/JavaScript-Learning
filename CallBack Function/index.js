//______________ Synchronous code_________
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");


//______________Asynchronous code___________
// console.log("one");
// console.log("two");
// console.log("three");

// function hello () {
//     console.log("Hello");
// }

// setTimeout(hello,2000); //2s

// console.log("four");
// console.log("five");


//_____________Callback____________

// function sum(a,b) {
//     console.log(a+b);
// }

// function Calculator(a,b,cb){
//     cb(a,b);
// }

// Calculator(2,3,sum);

// Calculator(1,3,(a,b)=>{
//     console.log(a+b);
// });

//______________Callback Hell_____________

function getData(Id,getNextData){
    setTimeout(()=>{
        console.log("data",Id);
        if(getNextData){
            getNextData();
        }
    },2000)
    
}

// getData(1,getData(2)); //immediately invoked

console.log("fetching data1....");
getData(1,()=>{
    console.log("fetching data2....");
    getData(2,()=>{
        console.log("fetching data3....");
        getData(3);
    });
})

