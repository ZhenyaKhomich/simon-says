import { createModalWindow } from "./createHTML.js";
import { clickStart} from "./clickStart.js";
let level = 1;
let answer = "";
let modalTransparent = document.querySelector(".modalTransparent");
let raundNumber = document.querySelector(".raund-number");

export function resultAnswer(newStr, oldStr) {
  oldStr = oldStr.join("");
  answer += newStr;
  if (oldStr.toLowerCase().startsWith(answer.toLowerCase())) {
    if (oldStr.toLowerCase() === answer.toLowerCase()) {
      if (level === 5) {
        createModalWindow(2);
        showModal();
      } else {
        createModalWindow(3);
        showModal();
        level +=1;
        nextLevel();
        answer = "";
      }  
    }
  } else {
    console.log(33333)
    createModalWindow(1);
    showModal();
  }
}

function showModal() {
  let modalWindow = document.querySelector(".modalWindow");
  modalTransparent.style.display = "flex";
  modalTransparent.style.background = "rgba(255, 255, 255, 0.5)";
  modalWindow.style.display = "flex";
}

function hiddenModal() {
  let modalWindow = document.querySelector(".modalWindow");
  modalTransparent.style.display = "none";
  modalTransparent.style.background = "rgba(255, 255, 255, 0)";
  modalWindow.style.display = "none";
}

function nextLevel() {
  const btnNextLevel = document.querySelector('.btnModalNext');
  const textBlock = document.querySelector(".text-block");
  btnNextLevel.onclick = () => {
    hiddenModal();
    raundNumber.innerHTML = level;
    textBlock.innerHTML = '';
    clickStart();
  }
}

function newGame() {
  const btnNewGame = document.querySelector('.btnModalNewGame');
  const textBlock = document.querySelector(".text-block");
  btnNewGame.onclick = () => {
    hiddenModal();
    level = 1;
    raundNumber.innerHTML = level;
    textBlock.innerHTML = '';
    clickStart();
  }
}
