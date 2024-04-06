// var, let, const

// var : Variable can be redeclared & updated.
//       A global scope variable (before 2015 not useful)


// let : Variable cannot be redeclared but can be updated.
//       A block scope variable


// const : Variable cannot be redeclared or updated.
//         A block scope variable


//__________________________________//

var age = 23;
var age = 34;
var age = 65;

console.log(age);

//_________________________________//

let app = 13;
//let app = 12; // Identifier 'app' has already been declared 
// Cannot redeclare block-scoped variable 'app'.

app = 12;

console.log(app);

//____________________________________//

const PI = 3.14;
//PI = 3.2;

console.log(PI); //Assignment to constant variable.

//____________________________________//

let x;
console.log(x); // undefined

const y=1; // 'const' declarations must be initialized.
console.log(y); // Missing initializer in const declaration 

//_____________________________________//

{
    let a = 5;
    //let a = 10; // Cannot redeclare block-scoped variable 'a'
    console.log("a = " + a);
}

{
    let a = 10;
    console.log("a = " + a);
}

//______________________________________//

// objects

const student = {
    name: "Arpita",
    age: 24,
    add: "Greencity",
}

console.log(student);
console.log(student.name);
console.log(student["name"]);

student.name = "Horipriya";
console.log(student.name);
console.log(student["name"]);