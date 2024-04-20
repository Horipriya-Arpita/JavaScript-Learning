//______________Promise_____________

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am promise");
//     // resolve("success");
//     reject("error");
// })

//console.log(promise)

//________________Data fetch with Promise___________

// function getData(Id) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             // console.log("Data",Id);
//             // resolve("success");
//             reject("error")
//         },2000)
//     });
// }

// let p1 = getData(1);

// p1.then((res)=>{
//     console.log("nice",res);
// })
// p1.catch((err)=>{
//     console.log("ops",err);
// })

//____________________fetching multiple data one after another__________________

function getData(Id) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data",Id);
            resolve("success");
        },2000)
    });
}

// let p1 = getData(1);

// p1.then((res)=>{
//     console.log("nice",res);
// })

// let p2 = getData(2);

// p2.then((res)=>{
//     console.log("nice",res);
// })

// getData(1).then((res)=>{
//     console.log("nice",res);
//     getData(2).then((res)=>{
//         console.log("nice",res);
//     })
// })

// console.log("fetching data1....");
// getData(1).then((res)=>{
//     console.log("fetching data2....");
//     getData(2).then((res)=>{
//         console.log("fetching data3....");
//         getData(3).then((res)=>{
//             console.log("all done");
//         })
//     })
// })

//_____________Promise Chain_____________

console.log("fetching data1....");
getData(1).then(()=>{
    console.log("fetching data2....");
    return getData(2);
}).then(()=>{
    console.log("fetching data3....");
    return getData(3);
}).then (()=>{
    console.log("all done");
})