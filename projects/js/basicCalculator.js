"use strict";

const buttons = document.querySelectorAll(".btn");
var first_input = document.getElementById("first_input");
var input_field = document.getElementById("input_field");

var firstNumber, secondNumber;
var aOperator;
var countOperatoInput = 0;

//buttons[20].addEventListener("click", doNotDuplicateDot);
const valueButtons = [
    buttons[8], buttons[9],
    buttons[10], buttons[12],
    buttons[13], buttons[14],
    buttons[16], buttons[17],
    buttons[18], buttons[19]
];
const arithmeticButtons = [
    buttons[5], buttons[7],
    buttons[11], buttons[15]
];

arithmeticButtons.forEach(aButton => {
    aButton.addEventListener("click", (e) => {
        operation(aButton.innerHTML);
        //console.log(aButton.innerHTML);
    });
});

valueButtons.forEach(vButton => {
    vButton.addEventListener("click", (e) => {
        //console.log(vButton.innerHTML);
        captureValue(vButton.innerHTML);
    });
});

// Solution button
document.getElementById("equal_to_button").addEventListener("click", solve);
// special functions 
buttons[4].addEventListener("click", reset);

function solve() {
    if (input_field.value != "") {
        secondNumber = input_field.value;
        //alert(`${firstNumber} ${aOperator} ${secondNumber}`)
        first_input.innerHTML += secondNumber;
        switch (aOperator) {
            case "+":
                input_field.value = firstNumber + secondNumber;
                break;
            case "-":
                input_field.value = firstNumber - secondNumber
                break;
            case "*":
                input_field.value = firstNumber * secondNumber
                break;
            case "/":
                input_field.value = firstNumber / secondNumber
                break;
            default:
                break;
        }
    }
}

function isZero() {
    if (input_field.value === "0" & input_field.value.length === 1) {
        return true
    }
    return false;
}

var captureValue = (value) => {
    input_field.value = isZero() ? value : input_field.value += value;
};

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
var operation = (op) => {
    if (input_field.value != 0) {
        firstNumber = input_field.value;
        aOperator = op;
        first_input.innerHTML = `${firstNumber} ${aOperator} `;
        input_field.value = "";
    } else if (input_field.value === "") {
        aOperator = op
        first_input.innerHTML = `${firstNumber} ${aOperator} `;
    }
};

function reset() {
    first_input.innerHTML = "";
    input_field.value = "0";
    firstNumber = 0;
    secondNumber = 0;
    countOperatoInput = 0;
}