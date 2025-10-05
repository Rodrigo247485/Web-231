"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Rodrigo Piccardo
      Date: 10/05/2025

      Filename: project06-03.js
*/

// Reference the "Same as Shipping Address" checkbox
let useShip = document.getElementById("useShip");

// event listener to trigger the copy function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Function to copy shipping fields to billing fields
function copyShippingToBilling() {
  if (useShip.checked)
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;
  document.getElementById("lastnameBill").value =
    document.getElementById("lastnameShip").value;
  document.getElementById("address1Bill").value =
    document.getElementById("address1Ship").value;
  document.getElementById("address2Bill").value =
    document.getElementById("address2Ship").value;
  document.getElementById("cityBill").value =
    document.getElementById("cityShip").value;
  document.getElementById("countryBill").value =
    document.getElementById("countryShip").value;
  document.getElementById("codeBill").value =
    document.getElementById("codeShip").value;
  document.getElementById("stateBill").selectedIndex =
    document.getElementById("stateShip").selectedIndex;
}

// Get all text input fields
let formElements = document.querySelectorAll("input[type='text']");

// Store the number of text fields
let fieldCount = formElements.length;

// Reference the error box element
let errorBox = document.getElementById("errorBox");

// validation event listener to each text input
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function to handle validation errors
function showValidationError(evt) {
  evt.preventDefault(); // Prevent browser’s default error popups
  errorBox.textContent = "Complete all highlighted fields";
}
