
const Url = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(Url);

// console.log(promise)

//______________async await_____________//

// const FactShow = async function getData() {
//     console.log("fetching data......");
//     let response = await fetch(Url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
//     fact.textContent = data[2].text;
// }

//getData();

// const button = document.querySelector("#btn");
// const fact = document.querySelector("#fact");

// button.addEventListener("click",FactShow);

//______________promise_________________

const button = document.querySelector("#btn");
const fact = document.querySelector("#fact");

button.addEventListener("click",getData);

function getData() {
    fetch(Url).then((response)=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        console.log(data);
        //return response.json();
        fact.textContent = data[2].text;

    })
}

