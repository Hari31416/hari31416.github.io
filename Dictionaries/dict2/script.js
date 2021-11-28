// Declaring variables
const word = document.querySelectorAll(".word");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const five = document.querySelectorAll(".five");
const close = document.querySelectorAll(".close");
const previous = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");
const reset = document.querySelectorAll(".reset");
const priorty = document.querySelectorAll(".priorty");
const btnOpenSA = document.querySelectorAll(".synsBtn");
const btnCloseSA = document.querySelectorAll(".closeSyns");
const SandA = document.querySelectorAll(".SandA");
const overlaySA = document.querySelectorAll(".overlaySA");
const numWords = document.querySelector(".numWords");

//Choose Correct Modal
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Info Modal
const btnOpenModalInfo = document.querySelector(".using");
const modalInfo = document.querySelector(".info-modal");
const btnCloseModalInfo = document.querySelector(".close-modal-info");
const overlayInfo = document.querySelector(".overlay-info");

// Other variables
const current = [one, two, three, four, five];
var wordLength = Array.from({ length: word.length }, () => 0);

//Showing Info Modal
const openModalInfo = function () {
  numWords.textContent = `There are currently ${wordLength.length} words in the dictionary.`;
  modalInfo.classList.remove("hidden");
  overlayInfo.classList.remove("hidden");
};

const closeModalInfo = function () {
  modalInfo.classList.add("hidden");
  overlayInfo.classList.add("hidden");
};

btnOpenModalInfo.addEventListener("click", openModalInfo);
btnCloseModalInfo.addEventListener("click", closeModalInfo);
overlayInfo.addEventListener("click", closeModalInfo);

// Fixing the height of the info modal
var rect = priorty[0].getBoundingClientRect();
modalInfo.style.top = `${rect.top}px`;

for (let i = 0; i < word.length; i++) {
  // S and A
  // Functions for opening and closing synonyms and antonyms
  const openModalSA = function (i) {
    SandA[i].classList.remove("hidden");
    overlaySA[i].classList.remove("hidden");
  };

  const closeModalSA = function (i) {
    SandA[i].classList.add("hidden");
    overlaySA[i].classList.add("hidden");
  };

  // Showing the S&A
  btnOpenSA[i].addEventListener("click", function () {
    openModalSA(i);
  });

  // Closing the S&A
  // By clicking on the close button
  btnCloseSA[i].addEventListener("click", function () {
    closeModalSA(i);
  });
  // By clicking on the overlay
  overlaySA[i].addEventListener("click", function () {
    closeModalSA(i);
  });
  // By clicking the escape button
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !SandA[i].classList.contains("hidden")) {
      closeModalSA(i);
    }
  });

  // The model for choosing the correct synonyms
  const openModal = function (i) {
    modal[i].classList.remove("hidden");
    overlay[i].classList.remove("hidden");
  };

  const closeModal = function (i) {
    modal[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  };

  btnsOpenModal[i].addEventListener("click", function () {
    openModal(i);
  });

  btnCloseModal[i].addEventListener("click", function () {
    closeModal(i);
  });
  overlay[i].addEventListener("click", function () {
    closeModal(i);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal[i].classList.contains("hidden")) {
      closeModal(i);
    }
  });

  // Showing the one meaning
  word[i].addEventListener("click", function () {
    var click = wordLength[i];
    click += 1;
    wordLength[i] = click;
    // console.log(click);
    if (click % 2 == 0) {
      next[i].classList.toggle("hidden");
      close[i].classList.toggle("hidden");
      word[i].classList.toggle("clicked");
      btnsOpenModal[i].classList.toggle("hidden");
      for (let j = 0; j < current.length; j++) {
        current[j][i].classList.add("hidden");
      }
    } else {
      one[i].classList.toggle("hidden");
      close[i].classList.toggle("hidden");
      // previous[i].classList.toggle("hidden");
      next[i].classList.toggle("hidden");
      word[i].classList.toggle("clicked");
      btnsOpenModal[i].classList.toggle("hidden");
    }
  });

  // Hiding the one by close button
  close[i].addEventListener("click", function () {
    btnsOpenModal[i].classList.toggle("hidden");
    one[i].classList.add("hidden");
    close[i].classList.add("hidden");
    // previous[i].classList.add("hidden");
    next[i].classList.add("hidden");
    word[i].classList.remove("clicked");
    for (let j = 0; j < current.length; j++) {
      current[j][i].classList.add("hidden");
    }
  });

  // Using the next button
  next[i].addEventListener("click", function () {
    for (let j = 0; j < current.length; j++) {
      if (j == 4) {
        // console.log(j);
        one[i].classList.toggle("hidden");
        five[i].classList.toggle("hidden");
      } else if (!current[j][i].classList.contains("hidden")) {
        // console.log(j);
        current[j + 1][i].classList.remove("hidden");
        current[j][i].classList.add("hidden");
        break;
      }
    }
  });

  //Using the priorty buttons
  for (let k = 0; k < priorty.length; k++) {
    priorty[k].addEventListener("click", function () {
      var value = priorty[k].classList[1];
      // console.log(k);
      priorty[k].classList.toggle("priortyClicked");
      if (word[i].classList.contains(value)) {
        word[i].classList.toggle("hidden");
        btnOpenSA[i].classList.toggle("hidden");
      }
    });

    // Hiding all the meanings by reset button plus showing all the words
    reset[0].addEventListener("click", function () {
      btnsOpenModal[i].classList.add("hidden");
      wordLength = Array.from({ length: word.length }, () => 0);

      one[i].classList.add("hidden");
      close[i].classList.add("hidden");
      // previous[i].classList.add("hidden");
      next[i].classList.add("hidden");
      word[i].classList.remove("clicked");
      word[i].classList.remove("hidden");
      priorty[k].classList.remove("priortyClicked");
      for (let j = 0; j < current.length; j++) {
        current[j][i].classList.add("hidden");
      }
    });
  }

  // Showing the synonyms and antonyms
}
