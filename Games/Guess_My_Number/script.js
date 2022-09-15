"use strict";
console.log(document.querySelector(".guess").value);
let score = 20;
//Generating a random number between 1 and 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // Checking if user provides no number
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
    // Winning Condition
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct! You Won!";
    document.querySelector(".message").classList.toggle("won");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    // setting the highscore
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess > randomNumber) {
    //   Lower the score
    score--;
    document.querySelector(".score").textContent = score;
    //   Print message
    document.querySelector(".message").textContent = "Too High!";
  } else if (guess < randomNumber) {
    //   Lower the score
    score--;
    document.querySelector(".score").textContent = score;
    //   Print message
    document.querySelector(".message").textContent = "Too Low!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".score").textContent = score;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
