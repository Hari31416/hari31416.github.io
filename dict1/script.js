const word = document.querySelectorAll(".word");
const meaning = document.querySelectorAll(".meaning");
const close = document.querySelectorAll(".close");
const reset = document.querySelectorAll(".reset");
const priorty = document.querySelectorAll(".priorty");

for (let i = 0; i < word.length; i++) {
  // Showing the meaning
  word[i].addEventListener("click", function () {
    meaning[i].classList.toggle("hidden");
    close[i].classList.toggle("hidden");
    word[i].classList.toggle("clicked");
  });

  // Hiding the meaning by close button
  close[i].addEventListener("click", function () {
    meaning[i].classList.add("hidden");
    close[i].classList.add("hidden");
    word[i].classList.remove("clicked");
  });

  //Using the priorty buttons
  for (let j = 0; j < priorty.length; j++) {
    priorty[j].addEventListener("click", function () {
      var value = priorty[j].classList[1];
      priorty[j].classList.toggle("priortyClicked");
      if (word[i].classList.contains(value)) {
        word[i].classList.toggle("hidden");
      }
    });
    // Hiding all the meaning by reset button plus showing all the words
    reset[0].addEventListener("click", function () {
      meaning[i].classList.add("hidden");
      close[i].classList.add("hidden");
      word[i].classList.remove("clicked");
      word[i].classList.remove("hidden");
      priorty[j].classList.remove("priortyClicked");
    });
  }
}
