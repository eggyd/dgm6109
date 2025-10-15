"use strict"

let cardType, cardNumber, cardCCV;



document.getElementById("submit").addEventListener("click", processFormValues);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});


///Collect inputs, validate them and evaluate answers
function processFormValues() {
  cardType = document.getElementById("CardType").value;
  cardNumber = document.getElementById("cardNumber").value;
  cardCCV = document.getElementById("cardCCV").value;
  processData();
}

function processData() {
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



// Check card number——must be 6 digits
function validateData() {

   if (cardNumber.length !== 6 || isNaN(cardNumber)) {
    output("Please enter a 6-digit credit card number.");
    return false;
  }

// Check CCV——must be 3 digits
  if (cardCCV.length !== 3 || isNaN(cardCCV)) {
    output("Please enter a 3-digit CCV number.");
    return false;
  }

 // Check CCV rules
 //I used parseInt() to make sure I’m comparing and adding numbers, not strings, when checking the CCV rules
 //parseInt() is used to convert a string into a number
  let s1 = parseInt(cardNumber.slice(0, 1)) + parseInt(cardNumber.slice(1, 2));
  let s2 = parseInt(cardNumber.slice(2, 3)) + parseInt(cardNumber.slice(3, 4));
  let s3 = parseInt(cardNumber.slice(4, 5)) + parseInt(cardNumber.slice(5, 6));
//slice() method is used to extract specific parts of a string

//By combining slice() and parseInt()
// I can take out each digit from the credit card number as a separate number,
// and then use them to calculate
  if (
    parseInt(cardCCV.slice(0, 1)) !== s1 ||
    parseInt(cardCCV.slice(1, 2)) !== s2 ||
    parseInt(cardCCV.slice(2, 3)) !== s3
  ) {
    output("CCV number does not match credit card number.");
    return false;
  }

  // If everything is correct
  return true;
}



function evaluateAnswers() {
    let price = 0;  
  if (cardType === "retail") price = 5.0;       // retail $5
  if (cardType === "starter") price = 50.0;     // starter $50
  if (cardType === "1edition") price = 5000.0;  // 1st edition $5000

   
    // over $1000 = no
    if (price > 1000) {
    output(
      "Unfortunately, the price of this item exceeds your credit limit. Do not complete order."
    );
    return false;
  }
   
    // <$50 = add $2
     if (price < 50) {
    price += 2.0;
    output(
      'Your card pack for "Magic: The Gathering" will be delivered to you as soon as possible.' +
        "Your credit card will be billed a total of $" +
        price.toFixed(2) +
        ". This includes a $2.00 shipping fee."
    );
    return true;
  }

   
    // free shippin
      output(
    'Your card pack for "Magic: The Gathering" will be delivered to you as soon as possible.' +
      "Your credit card will be billed a total of $" +
      price.toFixed(2) +
      ". You received FREE shipping on this order."
  );
  return true;
}
   

