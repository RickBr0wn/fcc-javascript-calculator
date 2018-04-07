'use strict';
let numberString = "";
let sum = [];
let answer = 0;

function numberEntry(num) {
    numberString += num;
    document.getElementById('displayWindow').innerHTML = numberString;
}

function clearNumber() {
    numberString = "";
    document.getElementById('displayWindow').innerHTML = "0";
}

function clearMemory() {
    numberString = "";
    sum = [];
    document.getElementById('displayWindow').innerHTML = "0";
}

function addNumbers() {
    sum.push(parseInt(numberString));
    sum.push("+");
    clearNumber();
}

function minusNumbers() {
    sum.push(parseInt(numberString));
    sum.push("-");
    clearNumber();
}

function divideNumbers() {
    sum.push(parseInt(numberString));
    sum.push("/");
    clearNumber();
}

function multiplyNumbers() {
    sum.push(parseInt(numberString));
    sum.push("*");
    clearNumber();
}

function equalNumbers() {
    sum.push(parseInt(numberString));
    let sumString = sum.join("");
    answer = eval(sumString);
    document.getElementById('displayWindow').innerHTML = answer;
    sum = [];
    sum.push(answer);
}