
let count = document.getElementById("count-h");
let c = 0;

document.getElementById("decrement").onclick = function () {
    c--;
    count.textContent = c;
}

document.getElementById("increment").onclick = function () {
    c++;
    count.textContent = c;
}

document.getElementById("reset").onclick = function () {
    c = 0;
    count.textContent = c;
}