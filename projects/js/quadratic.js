"use strict";

// alert("quadratic equation!");
// Get all the commands i.e the buttons
const buttons = document.querySelectorAll(".btn");
// Get all the input elements
const inputs = document.querySelectorAll(".variable");
const display_result = document.querySelectorAll(".x");
const solutions_description = document.querySelector(".solutions_description");
// JSON
let parameters = {};
let isEmpty = false;

// Iterate through the retrieved commands
buttons.forEach(button => {
    button.onclick = (e) => {     
        // store the current command inside caption variable
        let caption = e.target.dataset.button;

        switch (caption) {
            case "reset":
                // alert(caption)
                inputs.forEach(inp => {
                    inp.value = '';
                });
                display_result.forEach((result, index) => {
                    result.innerHTML = "value_" + (index + 1).toString();
                });
                solutions_description.innerHTML = "";
                parameters = {};
                break;
            
            case "solve":
                inputs.forEach(inp => {
                    if (inp.value === "") {
                        alert(`Please, enter a value for '${inp.name}'.`);
                        isEmpty = true;
                    }
                    // alert(`${index} :: ${inp.name} = ${inp.value}`)
                    parameters[inp.name] = parseInt(inp.value);
                });
                // Check for emptiness
                if (isEmpty) {
                    return;
                }
                //alert(`${parameters.keys} = ${parameters.values}`);
                // let d represents determinant
                let d = parameters["b"] ** 2 - (4 * parameters["a"] * parameters["c"]);
                if (d === 0) {
                    let x = (-1 * parameters.b) / (2 * parameters.a);
                    display_result[0].innerHTML = x.toString();
                    display_result[1].innerHTML = x.toString();
                    solutions_description.innerHTML = "Identical";
                } else if (d > 0) {
                    let x1 = ((-1 * parameters.b) + squareRoot(d)) / (2 * parameters.a);
                    let x2 = ((-1 * parameters.b) - squareRoot(d)) / (2 * parameters.a);
                    display_result[0].innerHTML = x1.toPrecision(2).toString();
                    display_result[1].innerHTML = x2.toPrecision(2).toString();
                    solutions_description.innerHTML = "Distinct";
                } else {
                    d = d * -1;
                    let x1 = ((-1 * parameters.b) + squareRoot(d)) / (2 * parameters.a);
                    let x2 = ((-1 * parameters.b) - squareRoot(d)) / (2 * parameters.a);
                    display_result[0].innerHTML = x1.toPrecision(2).toString() + "i";
                    display_result[1].innerHTML = x2.toPrecision(2).toString() + "i";
                    solutions_description.innerHTML = "Complex";
                }
                break;
            
            default:
                break;
        }
    };
});

function squareRoot(num) {
    return num ** 0.5;
}