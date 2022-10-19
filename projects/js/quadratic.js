"use strict";

// alert("quadratic equation!");
// Get all the commands i.e the buttons
const buttons = document.querySelectorAll(".btn");
// Get all the input elements
const inputs = document.querySelectorAll(".variable");
// JSON
let parameters = {};
let isEmpty = false;

// Iterate through the retrieved commands
buttons.forEach(button => {
    button.onclick = (e) => {     
        // store the current command inside caption variable
        let caption = e.target.dataset.button;
        
        inputs.forEach(inp => {
                    if (inp.value === "") {
                        alert(`Please, enter a value for '${inp.name}'.`);
                        isEmpty = true;
                    }
                    // alert(`${index} :: ${inp.name} = ${inp.value}`)
                    parameters[inp.name] = parseInt(inp.value);
                });

        switch (caption) {
            case "reset":
                // alert(caption)
                inputs.forEach(inp => {
                    inp.value = '';
                });
                break;
            
            case "solve":
                // Check for emptiness
                if (isEmpty) {
                    return;
                }
                //alert(`${parameters.keys} = ${parameters.values}`);
                // let d represents determinant
                let d = parameters["b"] ** 2 - (4 * parameters["a"] * parameters["c"]);
                if (d === 0) {
                    alert("Identical");
                } else if (d > 0) {
                    alert("Distinct");
                } else {
                    alert("Complex");
                }
                break;
            
            default:
                break;
        }
    };
});