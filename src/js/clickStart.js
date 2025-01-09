import { elementsArray } from "./startPage.js";
export const buttonStart = document.getElementById("button-start");
const textBlock = document.querySelector(".text-block");
const raundBlock = document.querySelector(".raund");
const levelTitle = document.querySelector(".level-title");
const buttonsElement = document.querySelector(".buttons");
const modalTransparent = document.querySelector(".modalTransparent");
let result = [];
let raund = 5;

export function clickStart() {

  modalTransparent.style.display = 'block';

  setTimeout(() => {
    randomElement(elementsArray);
  });
  textBlock.style.display = "block";
  buttonStart.style.display = "none";
  raundBlock.style.display = "flex";
  buttonsElement.style.display = "flex";
  levelTitle.innerText = "Level:";

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.hasAttribute("checked")) {
      input.nextElementSibling.style.pointerEvents = "none";
    } else {
      input.nextElementSibling.remove();
      input.remove();
    }
  });
}

function randomElement(elementsArray) {
  for (let i = 0; i < raund * 2; i++) {
    let k = Math.floor(Math.random() * elementsArray.length);
    result.push(elementsArray[k]);
  }
  showElements(result);
}

function showElements(result) {
  const keys = document.querySelectorAll(".key");
  let i = 0;

  let timer = setInterval(() => {
    textBlock.innerText += result[i];

    keys.forEach((key) => {
      key.classList.remove("key-click");
      if (
        key.innerText === result[i] ||
        key.innerText.toLowerCase() === result[i]
      ) {
        key.classList.add("key-click");
      }
    });
    ++i;

    if (i === result.length) {
      clearInterval(timer);
      setTimeout(() => {
        textBlock.innerHTML = "";
        document.querySelector(".key-click").classList.remove("key-click");
        modalTransparent.style.display = 'none';
      }, 2000);
    }
  }, 1000);
}
