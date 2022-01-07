"use strict";
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
var result = document.getElementById("result");

checkButton.addEventListener("click", check);
resetButton.addEventListener("click", () => {
    document.getElementById("input").value = "";
    result.innerHTML = "";

});

function check() {
    var yearInput = document.getElementById("input").value;
    var isItLeap = isItLeapYear(yearInput);
    var isIt = isItLeap ? "Yes! It's a leap year." : "No! It isn't a leap year.";
    if (isItLeap) {
        result.style.color = "#7cfc00";
    } else {
        result.style.color = "red";
    }
    result.innerHTML = isIt;
}

function isItLeapYear(year) {
    if (year % 4 === 0 ||
        (year % 100 === 0 & year % 400 === 0)) {
        return true;
    }
    return false;
}
