import { level } from "./startPage.js";
import { result } from "./clickStart.js";
import { resultAnswer } from "./result.js";
import { openModalWindow } from "./createHTML.js";

let regular;

export function keyDown() {
  const textBlock = document.querySelector(".text-block");

  if (level === "easy") {
    regular = /^[0-9]$/;
  } else if (level === "normal") {
    regular = /^[A-Za-z]$/;
  } else if (level === "hard") {
    regular = /^[0-9A-Za-z]$/;
  }

  if (regular.test(event.key)) {
    let audioBut = document.querySelector(".audioBut");
    if(openModalWindow) {
      return;
    }
    audioBut.play();
    // textBlock.innerText += event.key;
    showKeyDownOnKeybord(event.key);
    resultAnswer(event.key, result);
  } else {
    textBlock.innerText += "";
  }
}

export function clickKey() {
  const keys = document.querySelectorAll(".key");
  const textBlock = document.querySelector(".text-block");
  let audioBut = document.querySelector(".audioBut");

  keys.forEach((key) => {
    key.onclick = function () {
      if(openModalWindow) {
        return;
      }
      audioBut.play();
      // textBlock.innerText += event.target.innerText;
      resultAnswer(event.target.innerText, result);
    };
  });
}

function showKeyDownOnKeybord(letter) {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.classList.remove("key-click");
    if (key.innerText === letter || key.innerText.toLowerCase() === letter) {
      key.classList.add("key-click");
    }
  });
  setTimeout(() => {
    if (document.querySelector(".key-click")) {
      document.querySelector(".key-click").classList.remove("key-click");
    }
  }, 400);
}
