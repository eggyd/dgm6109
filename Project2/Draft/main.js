"use strict"

let cardType, cardNumber, cardCCV;



document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});

function processForm() {

   

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



function evaluateAnswers() {
    let price = 2025;  // base price or collectable starter pack
   
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

