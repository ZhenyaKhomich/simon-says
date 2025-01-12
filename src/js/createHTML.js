const dataModalWindow = [
  {
    img: "assets/image/lose.png",
    text: "You LOSE",
  },
  {
    img: "assets/image/win.png",
    text: "You WIN",
  },
  {
    img: "assets/image/nextLevel.png",
    text: "Open next level",
  },
  {
    img: "assets/image/lose.png",
    text: "Error",
  },
];

const body = document.body;

export function createHtmlPage() {
  return new Promise((resolve) => {
    const main = document.createElement("div");
    main.classList.add("main");

    const container = document.createElement("div");
    container.classList.add("container");

    const sectionOne = document.createElement("div");
    sectionOne.classList.add("section-one");

    const level = document.createElement("div");
    level.classList.add("level");

    const levelTitle = document.createElement("div");
    levelTitle.classList.add("level-title");
    levelTitle.textContent = "Please, choose level";

    const levelInputs = document.createElement("div");
    levelInputs.classList.add("level-inputs");

    const levels = ["easy", "normal", "hard"];
    levels.forEach((levelName, index) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.id = levelName;
      input.name = "level";
      if (index === 0) input.setAttribute("checked", "checked");

      const label = document.createElement("label");
      label.htmlFor = levelName;
      label.textContent = levelName;

      levelInputs.appendChild(input);
      levelInputs.appendChild(label);
    });

    level.appendChild(levelTitle);
    level.appendChild(levelInputs);

    const raund = document.createElement("div");
    raund.classList.add("raund");

    const raundTitle = document.createElement("div");
    raundTitle.classList.add("raund-title");
    raundTitle.textContent = "Raund:";

    const raundNumber = document.createElement("div");
    raundNumber.classList.add("raund-number");
    raundNumber.textContent = "1";

    raund.appendChild(raundTitle);
    raund.appendChild(raundNumber);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const newGameButton = document.createElement("button");
    newGameButton.classList.add("button", "newGame", "btnModalNewGame");
    newGameButton.textContent = "New game";

    const repeatGameButton = document.createElement("button");
    repeatGameButton.classList.add("button", "repeatGame");
    repeatGameButton.textContent = "Repeat sequence";

    buttons.appendChild(newGameButton);
    buttons.appendChild(repeatGameButton);

    sectionOne.appendChild(level);
    sectionOne.appendChild(raund);
    sectionOne.appendChild(buttons);

    const sectionTwo = document.createElement("div");
    sectionTwo.classList.add("section-two");

    const buttonStart = document.createElement("div");
    buttonStart.classList.add("button-start");
    buttonStart.id = "button-start";

    const buttonImage = document.createElement("img");
    buttonImage.src = "assets/image/start.png";
    buttonImage.alt = "start";

    buttonStart.appendChild(buttonImage);

    const textBlock = document.createElement("div");
    textBlock.classList.add("text-block");
    textBlock.setAttribute("maxlength", "5");

    sectionTwo.appendChild(buttonStart);
    sectionTwo.appendChild(textBlock);

    const sectionThree = document.createElement("div");
    sectionThree.classList.add("section-three");

    const keybord = document.createElement("div");
    keybord.classList.add("keybord");
    keybord.id = "keybord";

    sectionThree.appendChild(keybord);

    const modalTransparent = document.createElement("div");
    modalTransparent.classList.add("modalTransparent");

    container.appendChild(sectionOne);
    container.appendChild(sectionTwo);
    container.appendChild(sectionThree);

    main.appendChild(container);
    main.appendChild(modalTransparent);

    body.appendChild(main);

    resolve();
  });
}

export function createModalWindow(res) {
  let obj;
  const main = document.querySelector(".main");

  if (res === 1) {
    obj = dataModalWindow[0];
  } else if (res === 2) {
    obj = dataModalWindow[1];
  } else if (res === 3) {
    obj = dataModalWindow[2];
  } else {
    obj = dataModalWindow[3];
  }

  if (document.querySelector(".modalWindow")) {
    document.querySelector(".modalWindow").remove();
  }

  let modalWindow = document.createElement("div");
  modalWindow.classList.add("modalWindow");

  const modalImg = document.createElement("div");
  modalImg.classList.add("modalImg");

  const img = document.createElement("img");
  img.setAttribute("src", obj.img);
  img.setAttribute("alt", "picture");

  modalImg.append(img);
  modalWindow.append(modalImg);

  const modalText = document.createElement("div");
  modalText.classList.add("modalText");
  modalText.innerText = obj.text;

  modalWindow.append(modalText);

  const modalButton = document.createElement("div");
  modalButton.classList.add("modalButton");

  if (res === 3) {
    const btnModalNext = document.createElement("button");
    btnModalNext.classList.add("btnModal");
    btnModalNext.classList.add("btnModalNext");
    btnModalNext.innerText = "Next Level";

    modalButton.append(btnModalNext);
  }

  if (res === 4) {
    const btnModalNext = document.createElement("button");
    btnModalNext.classList.add("btnModal");
    btnModalNext.classList.add("btnModalContinue");
    btnModalNext.innerText = "Continue";

    modalButton.append(btnModalNext);
  }

  const btnModal = document.createElement("button");
  btnModal.classList.add("btnModal");
  btnModal.classList.add("btnModalNewGame");
  btnModal.innerText = "New game";

  modalButton.append(btnModal);
  modalWindow.append(modalButton);

  main.append(modalWindow);
}
