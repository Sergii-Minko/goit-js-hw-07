function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function onBtnElClick() {
  const amount = document.querySelector('input').value;
  if (amount >= 1 && amount < 100) {
    createBoxes(amount);
  }
}

function destroyBoxes() {
  const boxEl = document.querySelector('#boxes');
  boxEl.innerHTML = '';
}

function createBox(index) {
  const newBox = {
    width: 30 + 10 * (index - 1),
    height: 30 + 10 * (index - 1),
    backgroundColor: getRandomHexColor(),
  };
  const newBoxElement = document.createElement('div');
  newBoxElement.style = `width: ${newBox.width}px; height: ${newBox.height}px; background-color: ${newBox.backgroundColor};`;
  return newBoxElement;
}

function createBoxes(amount) {
  const boxesArrayEl = [];
  const boxEl = document.querySelector('#boxes');
  boxEl.innerHTML = '';
  for (let i = 1; i <= amount; i += 1) {
    boxesArrayEl.push(createBox(i));
  }
  boxEl.append(...boxesArrayEl);
  const amountInput = document.querySelector('input');
  amountInput.value = '';
}

const createFocusBtn = document.querySelector('button[data-create]');
const destroyFocusBtn = document.querySelector('button[data-destroy]');

createFocusBtn.addEventListener('click', onBtnElClick);
destroyFocusBtn.addEventListener('click', destroyBoxes);
