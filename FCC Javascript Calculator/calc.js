'use strict';
let numberString = "";
let sums = [];
let operations = [];
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
    sums = [];
    operations = [];
    document.getElementById('displayWindow').innerHTML = "0";
}

function addNumbers() {
    sums.push(parseInt(numberString));
    operations.push("+");
    clearNumber();
}

function minusNumbers() {
    sums.push(parseInt(numberString));
    operations.push("-");
    clearNumber();
}

function divideNumbers() {
    sums.push(parseInt(numberString));
    operations.push("/");
    clearNumber();
}

function multiplyNumbers() {
    sums.push(parseInt(numberString));
    operations.push("*");
    clearNumber();
}

function equalNumbers() {
    sums.push(parseInt(numberString));
    switch (operations[0]) {
        case "+":
            answer = sums[0] + sums[1];
            document.getElementById('displayWindow').innerHTML = answer;
            break;
        case "-":
            answer = sums[0] - sums[1];
            document.getElementById('displayWindow').innerHTML = answer;
            break;
        case "/":
            answer = sums[0] / sums[1];
            document.getElementById('displayWindow').innerHTML = answer;
            break;
        case "*":
            answer = sums[0] * sums[1];
            document.getElementById('displayWindow').innerHTML = answer;
            break;
    }
}