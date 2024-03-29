const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', () => {
  const name = nameInputEl.value.trim();
  nameOutputEl.textContent = name ? name : 'Anonymous';
});
