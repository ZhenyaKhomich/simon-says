import {choiceLevel} from './startPage.js'

// const keybord = document.getElementById("keybord");
// const levelElements = document.querySelectorAll("input");
// const letter = ["A", "Z"];
// const fingers = ["0", "9"];
// let level = "easy";
// let array;

// Array.from(levelElements).forEach((levelElement) => {
//   levelElement.onclick = function () {
//     level = levelElement.id;
// 		let keys = document.querySelectorAll('.key');
// 		keys.forEach(key => key.remove());
//     choiceLevel();
//   };
// });

// function choiceLevel() {
//   if (level === "easy") {
//     createKeybord(fingers);
//   } else if (level === "normal") {
//     createKeybord(letter);
//   } else if (level === "hard") {
//     createKeybord(fingers);
//     createKeybord(letter);
//   }
// }

// function createKeybord(array) {
//   for (let i = array[0].charCodeAt(); i <= array[1].charCodeAt(); i++) {
//     let div = document.createElement("div");
//     div.classList.add("key");
//     div.innerText = String.fromCodePoint(i);
//     keybord.append(div);
//   }
// }

choiceLevel();
