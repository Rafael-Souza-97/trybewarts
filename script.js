const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
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

// function counterTextarea(valor) {
//   const max = 500;
//   const total = valor.length;
//   console.log(total)
//   if (total <= max) {
//     const rest = max - total;
//     counter.innerHTML = rest;
//   } else {
//     text.value = valor.substr(0, max);
//   }
// }
// counterTextarea(this.value);
