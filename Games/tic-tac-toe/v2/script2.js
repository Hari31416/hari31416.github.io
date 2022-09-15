start = document.querySelector(".start");
replay = document.querySelector(".replay");
box = document.querySelector(".boxes");
fills = document.querySelectorAll(".fill");
winner = document.querySelector(".winner");
markerOne = document.querySelector(".marker1");
markerZero = document.querySelector(".marker0");

var playerMarker = ["🔴", "❌"];
const marker1 = "🔴";
const marker2 = "❌";
var currentPlayer = 1;

markerZero.addEventListener("click", function () {
  markerZero.classList.toggle("clicked");
});
markerOne.addEventListener("click", function () {
  markerOne.classList.toggle("clicked");
});

function giveWinner(winner) {
  return (
    (fills[0].textContent === winner &&
      fills[1].textContent === winner &&
      fills[2].textContent === winner) ||
    (fills[3].textContent === winner &&
      fills[4].textContent === winner &&
      fills[5].textContent === winner) ||
    (fills[6].textContent === winner &&
      fills[7].textContent === winner &&
      fills[8].textContent === winner) ||
    (fills[0].textContent === winner &&
      fills[3].textContent === winner &&
      fills[6].textContent === winner) ||
    (fills[1].textContent === winner &&
      fills[4].textContent === winner &&
      fills[7].textContent === winner) ||
    (fills[2].textContent === winner &&
      fills[5].textContent === winner &&
      fills[8].textContent === winner) ||
    (fills[0].textContent === winner &&
      fills[4].textContent === winner &&
      fills[8].textContent === winner) ||
    (fills[2].textContent === winner &&
      fills[4].textContent === winner &&
      fills[6].textContent === winner)
  );
}

// Start button
start.addEventListener("click", function () {
  replay.classList.remove("hidden");
  start.classList.add("hidden");
  box.classList.remove("hidden");
  if (markerOne.classList.contains("clicked")) {
    playerMarker = ["🔴", "❌"];
  } else if (markerZero.classList.contains("clicked")) {
    playerMarker = ["❌", "🔴"];
  }
  document.querySelector(".markerChoose").classList.add("hidden");
});
// fill buttons
fills.forEach((fill) => {
  fill.addEventListener("click", function () {
    if (!fill.classList.contains("empty")) {
    } else {
      fill.classList.remove("empty");
      fill.textContent = playerMarker[currentPlayer];
      fill.classList.add(`player${currentPlayer}`);
      if (currentPlayer === 0) {
        currentPlayer = 1;
      } else {
        currentPlayer = 0;
      }
    }
    if (giveWinner(marker1)) {
      box.classList.add("hidden");
      winner.textContent = `Player with the marker ${marker1} wins!`;
      document.querySelector("body").style.backgroundColor = "#b7f6bf";
      winner.classList.remove("hidden");
    } else if (giveWinner(marker2)) {
      box.classList.add("hidden");
      winner.textContent = `Player with the marker ${marker2} wins!`;
      document.querySelector("body").style.backgroundColor = "#b7f6bf";
      winner.classList.remove("hidden");
    }
  });

  //replay buttons
  replay.addEventListener("click", function () {
    fill.textContent = "Click Me!";
    fill.classList.remove("player1");
    fill.classList.remove("player0");
    fill.classList.add("empty");
    currentPlayer = 1;
    winner.textContent = "";
    winner.classList.add("hidden");
    document.querySelector(".markerChoose").classList.remove("hidden");
    replay.classList.add("hidden");
    start.classList.remove("hidden");
    box.classList.add("hidden");
    markerZero.classList.remove("clicked");
    markerOne.classList.remove("clicked");
    document.querySelector("body").style.backgroundColor = "#000000";
  });
});
