const dataModalWindow = [
    {
        img: 'assets/image/lose.png',
        text: 'You LOSE'
    },
    {
        img: 'assets/image/win.png',
        text: 'You WIN'
    },
    {
        img: 'assets/image/nextLevel.png',
        text: 'Open next level'
    },
]

const main = document.querySelector('.main');

export function createModalWindow(res) {

    let obj;

    if(res === 1) {
        obj = dataModalWindow[0];
    } else if(res === 2) {
        obj = dataModalWindow[1];
    } else {
        obj = dataModalWindow[2];
    }

    if(document.querySelector('.modalWindow')) {
        document.querySelector('.modalWindow').remove();
    }

    let modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');

    const modalImg = document.createElement('div');
    modalImg.classList.add('modalImg');

    const img = document.createElement('img');
    img.setAttribute('src', obj.img)
    img.setAttribute('alt', 'picture')

    modalImg.append(img);
    modalWindow.append(modalImg);

    const modalText = document.createElement('div');
    modalText.classList.add('modalText');
    modalText.innerText = obj.text;

    modalWindow.append(modalText);

    const modalButton = document.createElement('div');
    modalButton.classList.add('modalButton');

    if(res === 3) {
        const btnModalNext = document.createElement('button');
    btnModalNext.classList.add('btnModal');
    btnModalNext.classList.add('btnModalNext');
    btnModalNext.innerText = 'Next Level';

    modalButton.append(btnModalNext);
    }

    const btnModal = document.createElement('button');
    btnModal.classList.add('btnModal');
    btnModal.classList.add('btnModalNewGame');
    btnModal.innerText = 'New game';

    modalButton.append(btnModal);
    modalWindow.append(modalButton);

    main.append(modalWindow);
}