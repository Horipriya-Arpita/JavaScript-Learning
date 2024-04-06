//Math = built-in object that provides 
//       a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.49;
// let z;

// z = Math.round(x);
// console.log(z);

// let x = 3.59;
// let z;

// z = Math.round(x);
// console.log(z);

let x = 3;
let y = 2;
let z = 1;

//z = Math.round(x); //round a number to the nearest whole number.
//z = Math.floor(x); //rounds a decimal value DOWN to the previous integer
//z = Math.ceil(x); //rounds a decimal value UP to the next integer 
//z = Math.trunc(x); //removes any decimals and returns only the integer part of number

// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x); // retuns whether a number is negative, positive or zero.

// let min = Math.min(x,y,z);
// console.log(min);

// let max = Math.max(x,y,z);
// console.log(max);


//................................................//

// RANDOM NUMBER GENERATOR

//let r = Math.random(); // generate a random number floating point number between 0 (inclusive) and 1 (exclusive).

//let r = Math.random() * 6 ; // generate number between 0 (inclusive) and 6 (exclusive)

//let r = Math.floor(Math.random() *6) // 0 to 5

//let r = Math.ceil(Math.random() * 6) // 1 t0 6
//let r = Math.floor((Math.random() *6)+1) // 1 to 6

// let r = Math.floor((Math.random() * 100) + 1); 

// range -> 50 to 100

// let max = 100;
// let min = 50;

// // let r = Math.floor((Math.random() * max) + min); // this is not right way (139, 146)

// let r = Math.floor((Math.random() * (max-min)) + min);
// console.log(r);

//............................Game...................//





const button = document.getElementById("roll-btn");
const text = document.getElementById("text");

button.onclick = () => {
    const max = 100;
    const min = 50;

    const r = Math.floor((Math.random() * (max-min)) + min);
    text.textContent = `hello ${r}`;
}
