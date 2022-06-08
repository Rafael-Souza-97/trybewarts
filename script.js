const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
// const check = document.querySelector('#agreement');
// const submitBtn = document.querySelector('#submit-btn');

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

// function unlockSubmitButton() {
//   if(check.checked == true) {
//     submitBtn.disabled = false;
//   } else {
//     submitBtn.disabled = true;
//   }
// }
// unlockSubmitButton()

// function submitBtnActive() {
//   check.addEventListener('change', function(event) {
//     if (event.target.checked) {
//       submitBtn.enable();
//     } else {
//       submitBtn.disable();
//     }
//   });
// }
// submitBtnActive()
