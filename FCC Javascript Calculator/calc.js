'use strict';
let entryString = "";
let sum = "";
let firstNumber = 0;
let secondNumber = 0;

function numberEntry(num) {
    entryString += num;
    document.getElementById('displayWindow').innerHTML = entryString; 
}

function clearNumber() {
    entryString = "";
    document.getElementById('displayWindow').innerHTML = "0";
}

function addNumbers() {
    sum += entryString;
}