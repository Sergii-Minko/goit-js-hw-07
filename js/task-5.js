function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnElem = document.querySelector('.change-color');
const displayColorCode = document.querySelector('.color');

changeColorBtnElem.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;
  displayColorCode.textContent = randomHexColor;
}
