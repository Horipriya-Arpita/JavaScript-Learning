//Map Method 
// returns a new Array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one


const users = [

    {
        id: 1,
        username: "Arpita",
        address: "Greencity",
        age:20
    },

    {
        id: 2,
        username: "name2",
        address: "add2",
        age:21
    },

    {
        id: 3,
        username: "name3",
        address: "add3",
        age:25
    }

]

// const user = users.map(()=>{

// })
// console.log(user); //  [undefined, undefined, undefined]

///////////////////////////////////

// const user = users.map((u)=>{
//     console.log(u); 
    
//     // {
//     //     id: 1,
//     //     username: "Arpita",
//     //     address: "Greencity",
//     // },

//     // {
//     //     id: 2,
//     //     username: "name2",
//     //     address: "add2",
//     // },

//     // {
//     //     id: 3,
//     //     username: "name3",
//     //     address: "add3",
//     // }
// })
// console.log(user);

// const user = users.map(()=>{
//     return "hi";
// })
// console.log(user); //  ['hi', 'hi', 'hi']

// const user = users.map((u)=>{
//     return u.username;
// })
// console.log(user); //  ['Arpita', 'name2', 'name3']


// const user = users.map((u)=>{
//     return u.age;
// })
// console.log(user); //[20, 21, 25]

//_____________________________________//

// const user = users.map((u)=>u.age *2)
// console.log(user); // [40, 42, 50]

//_____________________________________//

// const getAges = (u)=>u.age*2;
// const user = users.map((u)=>u.age * 2)
// console.log(user); // [40, 42, 50]


// const newUser = users.map((u)=> {
//     return {
//         fname: u.username.toUpperCase(),
//         oldAge: u.age + 20,
//     };
// });

// console.log(newUser);
//
// {fname: 'ARPITA', oldAge: 40}
// 1
// : 
// {fname: 'NAME2', oldAge: 41}
// 2
// : 
// {fname: 'NAME3', oldAge: 45}

//__________________________________//

const names = users.map((u)=> `<h3>${u.username}</h3>`);


const label = document.querySelector("#label");

label.innerHTML= names.join('');