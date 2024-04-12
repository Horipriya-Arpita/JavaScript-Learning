function makeUpperCase(value) {
    console.log(value.toUpperCase())
}

//makeUpperCase("arpita");

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}
function handleName(name, cb){
    const fullname = `${name} das`;
    cb(fullname);
}

handleName('horipriya', makeUpperCase);
handleName('arpita',reverseString);

const button = document.querySelector(".btn");

button.addEventListener('click', function () {
    console.log('hello world');
})

//___________________________________________________//

// change color red first after 1s
// change color blue third after 2s
// change color green second after 3s

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");


const colorBtn = document.querySelector("#col-btn");

// function firstChange() {
//     first.style.color = "red";
// }

// function secondChange() {
//     second.style.color = "green";
// }

// function thirdChange() {
//     third.style.color = "blue";
// }

// // colorBtn.addEventListener("click", function() {
// //     setTimeout(firstChange(),2000);
// // })  // invoking the function immediately 

// colorBtn.addEventListener("click", function() {
//     setTimeout(firstChange,1000);
//     setTimeout(secondChange,3000);
//     setTimeout(thirdChange,2000);
// })

//______________________________________________________//

// now want to change the color serially:
// 1st => 1s
// 2nd => 4s
// 3rd => 6s


function firstChange() {
    first.style.color = "red";
    setTimeout(secondChange,3000);
}

function secondChange() {
    second.style.color = "green";
    setTimeout(thirdChange,2000);
}

function thirdChange() {
    third.style.color = "blue";
}


colorBtn.addEventListener("click", function() {
    setTimeout(firstChange,1000);
    
})
