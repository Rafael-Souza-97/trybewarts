const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const counter = document.getElementById('counter');
const text = document.getElementById('textarea');
// const form = document.getElementById('#form-data');

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

function textareaCount() {
  const total = text.value.length;
  counter.innerHTML = 500 - total;
}
text.addEventListener('input', textareaCount);

window.onload = agreement.addEventListener('click', () => {
  if (agreement.value === 'checked') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

// const secondPage = (event) => {
//   event.preventDefault();

//   const family = $('input[name=family]:checked');
//   const contents = $$('.subject:checked');
//   const note = $('input[name=rate]:checked');
//   const result = document.getElementById('#form-data');

//   formUser.style.display = 'none';
//   result.classList.toggle('display');
//   result.innertText = `
//   Nome: ${nome.value} ${lastname.value}
//   Email: ${emailForm.value}
//   Casa: ${house.value}
//   Família: ${family.value}
//   Avaliação: ${note.value}
//   Observações: ${observation.value};
//   `;
// };
