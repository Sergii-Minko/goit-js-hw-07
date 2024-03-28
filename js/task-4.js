const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', onformElementSubmit);

function onformElementSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  const result = { email, password };

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(result);
  }

  event.target.reset();
}
