
//______________________Promises_________________________//

const promise = new Promise((resolve, reject)=> {
    //resolve("reesolved")
    reject("ufff")
})

console.log(promise);

promise.then((d)=>{
    console.log(d);
}).catch((d)=>{
    console.log(d);
})


const randomNumber = 2;

const randomPromise = new Promise((resolve, reject) => {
    const value = Math.floor((Math.random()*3)+1);

    console.log(value);

    if(value===randomNumber){
        resolve("You guessed correctly...");
    }
    else {
        reject("You are wrong...");
    }

})

console.log(randomPromise);

randomPromise.then((s)=>{
    console.log(s);
}).catch((s)=> {
    console.log(s);
})


// const first = document.querySelector("#first");
// const second = document.querySelector("#second");
// const third = document.querySelector("#third");


const colorBtn = document.querySelector("#col-btn");


colorBtn.addEventListener("click", ()=>{
    addColor(1000,"red","first")
    .then(()=> addColor(3000,"green","second"))
    .then(()=> addColor(2000,"blue","third"))
    .catch((err)=>{ console.log(err);})
})

function addColor(time, color, element) {

    const item = document.querySelector(`#${element}`);
    return new Promise((res,rej)=>{
        
        if(item){
            setTimeout(()=>{
                item.style.color = color;
                res();
            },time);
        }

        else{
            rej("holonaaa holonaaa");
        }
    })
}