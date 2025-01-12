import { createHtmlPage } from "./createHTML.js";
import { enumerationInputs, choiceLevel } from "./startPage.js";
import { clickStart } from "./clickStart.js";

document.addEventListener("DOMContentLoaded", async () => {
  await createHtmlPage();
  init();
});

export function init() {
  enumerationInputs()
  choiceLevel();
  let buttonStart = document.getElementById("button-start"); 
  buttonStart.onclick = clickStart;
}



