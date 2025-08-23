/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author:Rodrigo Piccardo
      Date:08/19/2025

      Filename: js02.js
 */

// declare global constants for application
const EMP_COST = 100; //photography hourly rate
const BOOK_COST = 350; //cost of memory book
const REPRO_COST = 1250; // cost of reproduction rights
const TRAVEL_COST = 2; // travel cost per mile

// setup the form when page loads
window.addEventListener("load" , setupform);

// set the form's default values
function setupform() {
  document.getElementById("photoNum").value = 1;
  document.getElementById("photoHrs").value = 2;
  document.getElementById("makeBook").checked = false
  document.getElementById("photoRights").checked= false;
  document.getElementById("photoDist").value = 0;
}