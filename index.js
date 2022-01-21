let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let imgs = document.querySelectorAll("img");
let img1 = imgs[0];
let img2 = imgs[1];
let heading = document.querySelector("h1");

function handlePlay() {
  let rand1 = Math.floor(6 * Math.random()) + 1;
  let rand2 = Math.floor(6 * Math.random()) + 1;

  let src1 = "images/dice" + rand1 + ".png";
  let src2 = "images/dice" + rand2 + ".png";

  setTimeout(() => {
    img1.setAttribute("src", src1);
    img2.setAttribute("src", src2);

    if (rand1 > rand2) {
      heading.innerText = "🚩 Player 1 Wins !!!";
    } else if (rand2 > rand1) {
      heading.innerText = "⭐ Player 2 Wins !!!";
    } else {
      heading.innerText = "DRAW !!!";
    }
  }, 400);

  let play = new Audio("sounds/Play.mp3");
  play.play();
}

function handleReset() {
  heading.innerText = "Welcome to Dice Game!";
  let src = "images/dice1.png";
  img1.setAttribute("src", src);
  img2.setAttribute("src", src);

  let reset = new Audio("sounds/Reset.mp3");
  reset.play();
}

btn1.addEventListener("click", handlePlay);
btn2.addEventListener("click", handleReset);

document.addEventListener("keydown", handlePress);

function handlePress(event) {
  let key = event.key;
  if (key == "p" || key == "P") {
    btn1.click();
  }
  if (key == "r" || key == "R") {
    btn2.click();
  }
}
