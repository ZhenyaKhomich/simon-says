let keybord = document.getElementById("keybord");
const letter = ["A", "Z"];
const finger = ["0", "9"];
export let elementsArray = [];
export let level = "easy";
let array;

export function enumerationInputs() {
  const levelElements = document.querySelectorAll("input");
  Array.from(levelElements).forEach((levelElement) => {
    levelElement.onclick = function () {
      Array.from(levelElements).forEach((levelElement) => {
        levelElement.removeAttribute("checked");
      });
      levelElement.setAttribute("checked", "checked");
      level = levelElement.id;
      let keys = document.querySelectorAll(".key");
      keys.forEach((key) => key.remove());
      choiceLevel();
    };
  });
}

export function choiceLevel() {
  elementsArray = [];
  if (level === "easy") {
    createKeybord(finger);
  } else if (level === "normal") {
    createKeybord(letter);
  } else if (level === "hard") {
    createKeybord(finger);
    createKeybord(letter);
  }
  return level;
}

function createKeybord(array) {
  keybord = document.getElementById("keybord");
  for (let i = array[0].charCodeAt(); i <= array[1].charCodeAt(); i++) {
    let div = document.createElement("div");
    div.classList.add("key");
    div.innerText = String.fromCodePoint(i);
    if (!isFinite(String.fromCodePoint(i))) {
      elementsArray.push(String.fromCodePoint(i).toLowerCase());
    }
    elementsArray.push(String.fromCodePoint(i));
    keybord.append(div);
  }
}
