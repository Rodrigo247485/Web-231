"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Rodrigo Piccardo
      Date: 9/28/2025

      Filename: project05-01.js
*/
"use strict";

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

let timeID;

// Declare questionList (all input elements inside div#quiz)
let questionList = document.querySelectorAll("div#quiz input");

// onclick event handler to startQuiz
startQuiz.onclick = function () {
  overlay.className = "showquiz";
  timeID = setInterval(countdown, 1000);
};

// Define countdown() function
function countdown() {
  if (timeLeft === 0) {
    clearInterval(timeID);
    let totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You scored 100%!");
    } else {
      alert(
        `You got ${correctAnswers.length - totalCorrect} incorrect out of ${
          correctAnswers.length
        } questions.`
      );
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
    timeLeft--;
    quizClock.value = timeLeft;
  }
}

function checkAnswers() {
  let totalCorrect = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      totalCorrect++;
    }
  }

  return totalCorrect;
}

