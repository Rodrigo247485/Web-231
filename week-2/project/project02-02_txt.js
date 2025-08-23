/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Rodrigo Piccardo
      Date: 08/23/2025

      Filename: project02-02.js
 */

 // Declare variables and assign values
function verifyForm() {
  let name= document.getElementById("name").value;
  let email= document.getElementById("email").value;
  let phone= document.getElementById("phone").value;
}

 // Conditional check using &&
 (name && email && phone)
  ? window.alert("Thank you")
  : window.alert("Please fill in all fields");

// event listener to submit button
document.getElementById("submit").addEventListener("click", verifyForm);