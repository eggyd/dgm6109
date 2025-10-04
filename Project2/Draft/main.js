"use strict"

/* IC: Declare global variables to store user-entered information and results here */
let cardType, cardNumber, cardCCV;

/* IC: We have set up the form buttons for you, as well as the code that will clear the output once the user has successfully filled out the form and the program has given them final output (instead of telling them they need to correct something). We have set things up so that the output area is cleared, but the form remains filled out. This is to make it easier to test your project with slightly different versions of information rather than having to fill out the whole form every time. */

document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});

function processForm() {

    /* IC: Assign values from your form inputs here, remembering:
        1) Always work with the value property from the form input

        2) Form data always comes in as type String. You MAY want to convert some inputs to Numbers, but you ALSO may need to analyze some numeric inputs as text (for example, if you need to check how many digits were entered, or only look at certain digits)

        3) You can do additional pre-processing here, if needed, but everything related to validating form input or providing results should go into the other functions provided below OR by functions that those other functions call (which you may also write)
    */

  cardType = document.getElementById("CardType").value;
  cardNumber = document.getElementById("cardNumber").value;
  cardCCV = document.getElementById("cardCCV").value;

   let evaluationCompleted = false;

    

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } else {
        rule();
    }
}

/* IC: In this function, do any validation with validate the data was correctly entered in general, not for specific cases. Return false if you have told the user that they need to correct something. Return true if all data is valid. We have provided you with the basic constraints for the data, but you may improve the validation as a bonus (as long as you don't mess up our ability to test every option in your evaluateAnswers function!) */
let valid = false
// Check card number——must be 6 digits
function validateData() {

    if (cardNumber.length !== 6 || isNaN(cardNumber)) {
        output("Please enter 6 digits card number!")
       ;
    return false;
}
// Check CCV——must be 3 digits
  if (cardCCV.length !== 3 || isNaN(cardCCV)) {
    output("Please enter a 3-digit CCV.");
    return false;
  }

 // Check CCV rules
  let s1 = parseInt(cardNumber[0]) + parseInt(cardNumber[1]);
  let s2 = parseInt(cardNumber[2]) + parseInt(cardNumber[3]);
  let s3 = parseInt(cardNumber[4]) + parseInt(cardNumber[5]);
  if (
    parseInt(cardCCV[0]) !== s1 ||
    parseInt(cardCCV[1]) !== s2 ||
    parseInt(cardCCV[2]) !== s3
  ) {
    output("Incorrect credit card information entered.");
    return false;
  }

  // If everything is correct
  valid = true;
  return valid;
}


/* IC: In this function, use conditional logic to figure out if the user's input meets all of the constraints that we have provided. Return false if you have told the user that they need to correct something. Return true if all data is valid. NOTE: Although the focuses of this project are conditional logic and function returns, you may need to create additional variables, do some calculations, and/or do some String manipulation in order to successfully complete your project! */

function evaluateAnswers() {
    let price = 2025;  // base price or Collectable starter pack
   
    // 1st edition = no
    if (cardType == "1edition") {
        output("Unfortunately, the price of this item exceeds your credit limit.");
        return false;
    }
   
    // retail = add $2
     if (cardType === "retail") {
    price = price + 2; 
    output(
        "Total price: $" +
        price.toFixed(2) +
        " (includes $2.00 shipping fee)."
    );
    return true;
  }
   
    // Starter pack → normal price
     if (cardType === "starter") {
    price = 2025; 
    output(
        "Total price: $" +
        price.toFixed(2) +
        "(FREE shipping)"
    );
    return true;
  }
   
}

/* TIP: The above two functions are written using different techniques for communicating success or failure. In your project, we will be looking for consistency -- i.e., choose ONE of these methods (early returns, or tracking the success in a variable) and use it throughout your project! */