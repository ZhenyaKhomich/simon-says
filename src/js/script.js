import { choiceLevel, elementsArray } from "./startPage.js";
import { clickStart, buttonStart } from "./clickStart.js";

function init() {
  choiceLevel();
  buttonStart.onclick = clickStart;
}

init();

