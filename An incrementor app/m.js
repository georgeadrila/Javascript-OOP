
let increas = document.getElementById("counter");
let res = document.getElementById("counter");
let m = 0;
function increase(){
    m = m + 1;
    increas.innerText = m;
}

function reduce(){
    m = m - 1;
    increas.innerText = m;
}

function reset(){
    m = 0;
    res.innerText = m
}

let sav = document.getElementById("save");
let saved = document.getElementById("saved");
function save(){
    let str = m + " - ";
    saved.textContent += str;
}