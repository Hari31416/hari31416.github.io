games = document.querySelector(".games");
games2 = document.querySelector(".games2");
games3 = document.querySelector(".games3");
dicts = document.querySelector(".dict");
btns = document.querySelectorAll(".btns");
console.log(btns[0].textContent, btns.length);

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     console.log(btns[i].textContent);
//     if (btns[i].textContent == "Games") {
//       games.classList.remove("hidden");
//     } else if (btns[i].textContent == "Dictionaries") {
//       dicts.classList.remove("hidden");
//     }
//   });
// }

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function () {
    if (btn.textContent == "Games") {
      games.classList.toggle("hidden");
    } else if (btn.textContent == "Dictionaries") {
      dicts.classList.toggle("hidden");
    } else if (btn.textContent == "Games2") {
      games2.classList.toggle("hidden");
    } else if (btn.textContent == "Games3") {
      games3.classList.toggle("hidden");
    }
  });
});
