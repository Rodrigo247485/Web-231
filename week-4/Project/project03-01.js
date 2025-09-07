/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Rodrigo Piccardo
      Date: 09/07/2025

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// element with class menu item and event listener to each item
let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate the total order cost
function calcTotal() {
  let orderTotal = 0;

// loop through menu items and add value of checked items to order total
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

//function to format number as currency
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
