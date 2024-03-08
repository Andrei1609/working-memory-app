"use strict";
//the items
let show = document.querySelector(".hidden");
let button = document.querySelector(".button");
let game = document.querySelector(".game");
let score = 0;
let input = document.querySelector(".input");
input.focus();

//startgame function+restart
let startgame = function () {
  //initializare proces+intrebarea
  let val = document.querySelector(".input").value;
  let q = Math.floor(Math.random() * Math.pow(10, val));
  show.classList.remove("show");
  let html = `<p class="ntext">${q}</p>`;
  game.insertAdjacentHTML("afterbegin", html);

  //ce se intampla dupa cateva secunde
  setTimeout(function () {
    let text = document.querySelector(".ntext");
    text.classList.add("hidden");
    html = `<div class="n2text">
    <input type="text" class="input2" />
    <button class="button2">OK</button>
  </div>`;
    game.insertAdjacentHTML("afterbegin", html);
    let input2 = document.querySelector(".input2");
    input2.focus();
    let button2 = document.querySelector(".button2");

    const restart = function () {
      let answer = document.querySelector(".input2").value;
      if (answer == q) {
        score++;
        document.querySelector(".n2text").classList.add("hidden");
        startgame();
      } else {
        html = `<p class="n3text">Score:${score}</p><br>`;
        document.querySelector(".n2text").classList.add("hidden");
        game.insertAdjacentHTML("afterbegin", html);
        setTimeout(() => {
          document.querySelector(".n3text").classList.add("hidden");
          startgame();
        }, 2000);

        score = 0;
      }
    };
    input2.addEventListener("keypress", function (e) {
      if (e.key == "Enter") restart();
    });
    button2.addEventListener("click", restart);
  }, 1800);
};
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") startgame();
});
button.addEventListener("click", startgame);
