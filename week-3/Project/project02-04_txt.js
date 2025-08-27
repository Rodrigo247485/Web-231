/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Rodrigo Piccardo
      Date: 08/26/2025

      Filename: project02-04.js
 */





// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// Declare constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 12.95;
const SALAD_PRICE = 8.95;
const SALES_TAX = 0.07;

// Event listener to calculate total when button is clicked
document.getElementById("chicken").addEventListener("click", calculateTotal);
document.getElementById("halibut").addEventListener("click", calculateTotal);
document.getElementById("burger").addEventListener("click", calculateTotal);
document.getElementById("salmon").addEventListener("click", calculateTotal);
document.getElementById("salad").addEventListener("click", calculateTotal);

function calculateTotal(){
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);
  let total = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}