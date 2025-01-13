import { createModalWindow } from "./createHTML.js";
import { clickStart, result, showElements } from "./clickStart.js";
import { init } from "./script.js";

let level = 1;
let answer = "";
let modalTransparent = document.querySelector(".modalTransparent");
let raundNumber = document.querySelector(".raund-number");
let buttonStart = document.getElementById("button-start");
let repeatGame = document.querySelector(".repeatGame");
let activeRepeatBtn = true;
let attempt = true;
let isProcessing = true;
let arrayAddaption = [];






export function resultAnswer(newStr, oldStr) {
  oldStr = oldStr.join("");


if(isProcessing) {
  const textBlock = document.querySelector(".text-block");
  arrayAddaption.push(newStr);
  answer += arrayAddaption[0];
  textBlock.innerText = answer;
  isProcessing = false;
} else {
  return;
}

setTimeout(() => {
  isProcessing = true;
  arrayAddaption = [];
},100)

  // answer += newStr;
  if (oldStr.toLowerCase().startsWith(answer.toLowerCase())) {
    if (oldStr.toLowerCase() === answer.toLowerCase()) {
      if (level === 5) {
        createModalWindow(2);
        showModal();
        newGame();
        let audioWin = document.querySelector(".audioWin");
        audioWin.play();
      } else {
        createModalWindow(3);
        showModal();
        level += 1;
        nextLevel();
        newGame();
        answer = "";
      }
    }
  } else {
    if (attempt) {
      let repeatGame = document.querySelector(".repeatGame");
      repeatGame.classList.add("inactive");
      attempt = false;
      activeRepeatBtn = false;~
      createModalWindow(4);
      showModal();
      newGame();
      continueLevel();
    } else {
      let audioLose = document.querySelector(".audioLose");
      audioLose.play();
      createModalWindow(1);
      showModal();
      newGame();
    }
  }
}

function showModal() {
  let modalWindow = document.querySelector(".modalWindow");
  modalTransparent = document.querySelector(".modalTransparent");
  modalTransparent.style.display = "flex";
  modalTransparent.style.background = "rgba(255, 255, 255, 0.5)";
  modalWindow.style.display = "flex";
}

function hiddenModal() {
  let modalWindow = document.querySelector(".modalWindow");
  let modalTransparent = document.querySelector(".modalTransparent");
  modalTransparent.style.display = "none";
  modalTransparent.style.background = "rgba(255, 255, 255, 0)";
  if (modalWindow) {
    modalWindow.style.display = "none";
  }
}

function nextLevel() {
  const btnNextLevel = document.querySelector(".btnModalNext");
  const textBlock = document.querySelector(".text-block");
  btnNextLevel.onclick = () => {
    hiddenModal();
    raundNumber = document.querySelector(".raund-number");
    raundNumber.innerHTML = level;
    textBlock.innerHTML = "";
    clickStart();
    activeRepeatBtn = true;
    attempt = true;
    repeatGame.classList.remove("inactive");
  };
}

function continueLevel() {
  const textBlock = document.querySelector(".text-block");
  const btnContinue = document.querySelector(".btnModalContinue");
  btnContinue.onclick = function () {
    hiddenModal();
    textBlock.innerHTML = "";
    answer = "";
  };
}

export function newGame() {
  const btnsNewGame = document.querySelectorAll(".btnModalNewGame");
  const textBlock = document.querySelector(".text-block");
  let repeatGame = document.querySelector(".repeatGame");

  btnsNewGame.forEach((btnNewGame) => {
    btnNewGame.onclick = () => {
      const levelTitle = document.querySelector(".level-title");
      const raundBlock = document.querySelector(".raund");
      const buttonsElement = document.querySelector(".buttons");
      raundNumber = document.querySelector(".raund-number");
      buttonStart = document.getElementById("button-start");

      repeatGame.classList.remove("inactive");
      activeRepeatBtn = true;
      attempt = true;

      hiddenModal();
      level = 1;
      answer = "";
      levelTitle.innerText = "Please, choose level";
      raundNumber.innerHTML = level;
      textBlock.innerHTML = "";
      let keys = document.querySelectorAll(".key");
      keys.forEach((key) => key.remove());

      const inputs = document.querySelectorAll("input");

      inputs.forEach((input) => {
        if (input.hasAttribute("checked")) {
          input.nextElementSibling.style.pointerEvents = "";
        } else {
          input.nextElementSibling.hidden = "";
          input.hidden = "";
        }
      });

      textBlock.style.display = "none";
      buttonStart.style.display = "block";
      raundBlock.style.display = "none";
      buttonsElement.style.display = "none";

      init();
    };
  });
}

export function repeatSequence() {
  const textBlock = document.querySelector(".text-block");
  repeatGame = document.querySelector(".repeatGame");
  modalTransparent = document.querySelector(".modalTransparent");

  repeatGame.onclick = function () {
    textBlock.innerText = '';
    if (activeRepeatBtn) {
      modalTransparent.style.display = "block";
      showElements(result);
      activeRepeatBtn = false;
      repeatGame.classList.add("inactive");
    }
  };
}
