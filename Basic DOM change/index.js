
//console.log("Arpita");

//window.alert("Hiii");

//DOM access

document.getElementById("H1").textContent = "Hiii Arpita";
document.getElementById("p1").textContent = "This paragraph is showing your code done.";

//variable = A container that stores a value


//1. declaration  let x;
//2. assignment   x = 100;


let x = 10;
console.log(x);

let age = 25;
let price = 10.99;
let gpa = 2.1;
let online = true;
let firstname = "Horipriya";

console.log(`Yor are ${age} years old`);
console.log(typeof age);

console.log(`The price is: $${price}`);
console.log(typeof price);

console.log(`Your gpa is : ${gpa}`);
console.log(typeof gpa);

console.log(`He is online: ${online}`);
console.log(typeof online);

console.log(`My name is : ${firstname}`);
console.log(typeof firstname);

//with DOM

let fullname = "Horipriya Arpita";
let aage = 25;
let isStudent = false;

document.getElementById("H1").textContent = `Hiiii ${fullname}`;
document.getElementById("p1").textContent = `Your age is ${age}`;
document.getElementById("p2").textContent = `Enrolled :: ${isStudent}`;

//arithmetic operators

let s = 30;
//s = s+1;
//s = s-1;
//s = s*2;
//s = s/2;
//s = s**2;
//s = s%4;


//s +=1;
//s -=1;
//s *=2;
//s /=2;
//s **=2;
//s %=4;

//s++;
//s--;

console.log(s);

let res = 1 + 2*3 + 4**2; //23
console.log(res);

let res1 = 12 % 5 + 8 / 2; //6
console.log(res1);

let res2 = 6 / 2 ** 7; //0.0466875
console.log(res2);

/*
    Operator precedence
    1. parenthesis
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction

*/