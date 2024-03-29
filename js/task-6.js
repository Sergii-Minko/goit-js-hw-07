const boxEl = document.querySelector('#boxes');
const amountInput = document.querySelector('input');
const baseWidthHeigth = 30;
const increment = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onBtnElClick() {
  createBoxes(amountInput.value);
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  amountInput.value = '';
}

function createBox(index) {
  const newBoxElement = document.createElement('div');
  newBoxElement.style = `width: ${
    baseWidthHeigth + increment * index
  }px; height: ${
    baseWidthHeigth + increment * index
  }px; background-color: ${getRandomHexColor()};`;
  return newBoxElement;
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const boxesArrayEl = [];
    destroyBoxes();
    for (let i = 1; i <= amount; i += 1) {
      boxesArrayEl.push(createBox(i - 1));
    }
    boxEl.append(...boxesArrayEl);
  }
}

const createFocusBtn = document.querySelector('button[data-create]');
const destroyFocusBtn = document.querySelector('button[data-destroy]');

createFocusBtn.addEventListener('click', onBtnElClick);
destroyFocusBtn.addEventListener('click', destroyBoxes);
