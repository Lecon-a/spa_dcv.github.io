"use strict";

const buttons = document.querySelectorAll(".btn");
var first_input = document.getElementById("first_input");
var input_field = document.getElementById("input_field");

var firstNumber, secondNumber;
var op;
var countOperatoInput = 0;

buttons[19].addEventListener("click", btnZero);
buttons[16].addEventListener("click", btnOne);
buttons[17].addEventListener("click", btnTwo);
buttons[18].addEventListener("click", btnThree);
buttons[12].addEventListener("click", btnFour);
buttons[13].addEventListener("click", btnFive);
buttons[14].addEventListener("click", btnSix);
buttons[8].addEventListener("click", btnSeven);
buttons[9].addEventListener("click", btnEight);
buttons[10].addEventListener("click", btnNine);
//buttons[20].addEventListener("click", doNotDuplicateDot);
buttons[15].addEventListener("click", add);
buttons[11].addEventListener("click", minus);
buttons[7].addEventListener("click", multiply);
buttons[5].addEventListener("click", divide);
// special functions
buttons[4].addEventListener("click", reset);

function btnZero() {
    console.log(isZero());
    input_field.value = isZero() ? 0 : input_field.value += 0;
}

function btnOne() {
    console.log(isZero());
    input_field.value = isZero() ? 1 : input_field.value += 1;
}

function btnTwo() {
    input_field.value = isZero() ? 2 : input_field.value += 2;
}

function btnThree() {
    input_field.value = isZero() ? 3 : input_field.value += 3;
}

function btnFour() {
    input_field.value = isZero() ? 4 : input_field.value += 4;
}

function btnFive() {
    input_field.value = isZero() ? 5 : input_field.value += 5;
}

function btnSix() {
    input_field.value = isZero() ? 6 : input_field.value += 6;
}

function btnSeven() {
    input_field.value = isZero() ? 7 : input_field.value += 7;
}

function btnEight() {
    input_field.value = isZero() ? 8 : input_field.value += 8;
}

function btnNine() {
    input_field.value = isZero() ? 9 : input_field.value += 9;
}

function isZero() {
    if (input_field.value === "0" & input_field.value.length === 1) {
        return true
    }
    return false;
}

// dot button
function doNotDuplicateDot() {
    var values = input_field.value;
    for (let i = 0; i < values.length; i++) {
        if (values[i] = ".") {
            input_field.value += ".";
        }
    }
}

// Operators buttons functions
var response;
function add() {
    response = oneOperator("+");
    console.log(`${countOperatoInput} => ${response}`);
    firstNumber = input_field.value;
    first_input.innerHTML = firstNumber + " + ";
    input_field.value = ""
    op = "+";
    countOperatoInput = 1;
}

function minus() {
    response = oneOperator("-");
    console.log(`${countOperatoInput} => ${response}`);
    firstNumber = input_field.value;
    first_input.innerHTML = firstNumber + " - ";
    input_field.value = ""
    op = "-";
}

function multiply() {
    response = oneOperator("*");
    console.log(`${countOperatoInput} => ${response}`);
    firstNumber = input_field.value;
    first_input.innerHTML = firstNumber + " * ";
    input_field.value = ""
    op = "*";
}

function divide() {
    response = oneOperator("/");
    console.log(`${countOperatoInput} => ${response}`);
    firstNumber = input_field.value;
    first_input.innerHTML = firstNumber + " / ";
    input_field.value = ""
    op = "/";
}

function reset() {
    first_input.innerHTML = "";
    input_field.value = "0";
    firstNumber = 0;
    secondNumber = 0;
}

function oneOperator(newOp) {
    if (countOperatoInput == 1) {
        countOperatoInput = 0;
        return prompt(`Do you want to replace ${op} to ${newOp}? If 'Yes' click 'Ok' and if 'No' click 'Cancel' button.`);
    }
}
