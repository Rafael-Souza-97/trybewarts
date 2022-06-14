const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const counter = document.getElementById('counter');
const text = document.getElementById('textarea');

function loginBtnActive() {
  loginBtn.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
loginBtnActive();

window.onload = agreement.addEventListener('click', () => {
  if (agreement.value === 'checked') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

function textareaCount() {
  const total = text.value.length;
  counter.innerHTML = 500 - total;
}
text.addEventListener('input', textareaCount);
