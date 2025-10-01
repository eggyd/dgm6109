"use strict";

document.getElementById("submit").addEventListener("click", function() {
   
    let f = Number(document.getElementById("inputF").value);
    let c = (f - 32) * 5 / 9;
    let k = (f + 459.67) * 5 / 9;

   
    let conversionType = document.getElementById("conversionChoice").value;

    // if if 
    
    // if (conversionType === "c") {
    //     output("Fahrenheit: " + f + " Celsius: " + c);
    // }
    // if (conversionType === "k") {
    //     output("Fahrenheit: " + f + " Kelvin: " + k);
    // }
    // if (conversionType === "f") {
    //     output("Fahrenheit: " + f);
    // }
    

    // if else
    if (conversionType === "f") {
        output("Fahrenheit: " + f);
    } else if (conversionType === "c") {
        output("Fahrenheit: " + f + " Celsius: " + c);
    } else {
        output("Fahrenheit: " + f + " Kelvin: " + k);
    }

    /*
    I prefer the if/else version because it uses fewer lines of code
    and runs more efficiently by checking only one condition.
    */
});
