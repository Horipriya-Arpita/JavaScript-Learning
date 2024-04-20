//_________________________Async-Await____________________

async function getWeather() {
    setTimeout(()=>{
        console.log("nice weather");
    },2000)
}

// let result = await getWeather();
// //console.log(result); // Async function return a promise

// console.log("one");
// console.log("two");
// console.log("three");

// async function api(){
//     await getWeather();
//     await getWeather();
// }

// api();


//_____________data fetching__________

async function getData(Id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data",Id);
            resolve()
        },2000)
    })
}

async function getAllData() {
    console.log("fetching data 1 ........");
    await getData(1);
    console.log("fetching data 2 ........");
    await getData(2);
    console.log("fetching data 3 ........");
    await getData(3);
    console.log("fetching data 4 ........");
    await getData(4);
}

getAllData();