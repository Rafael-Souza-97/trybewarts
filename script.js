const email = document.querySelector('.email');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const counter = document.getElementById('counter');
const text = document.getElementById('textarea');
const resultForm = document.querySelector('.resultForm')

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

function formName() {
  const nameForm = document.getElementById('nameForm');
  const name = document.querySelector('#input-name');
  const lastName = document.getElementById('input-lastname');
  nameForm.innerText += ` ${name.value} ${lastName.value}`;
}
function formEmail() {
  const emailForm = document.getElementById('emailForm');
  const email = document.querySelector('#input-email');
  emailForm.innerText += ` ${email.value}`;
}
function formHouse() {
  const house = document.getElementById('house');
  const houseForm = document.querySelector('#casaForm');
  houseForm.innerText += ` ${house.value}`;
}
function formFamily() {
  const familiaForm = document.getElementById('familiaForm');
  const family = document.querySelector('input[name=family]:checked');
  familiaForm.innerHTML += family.value;
}
function formMaterias() {
  const materiaForm = document.getElementById('materiasForm');
  const materias = document.querySelectorAll('.subject:checked');
  const materiasValue = [];
  for (let i = 0; i < materias.length; i += 1) {
    materiasValue.push(materias[i].value);
  }
  materiaForm.innerText += ` ${materiasValue.join(', ')}`;
}

function formRate() {
  const rateForm = document.getElementById('rateForm');
  const labelRate = document.querySelectorAll('[name=rate]:checked');
  const rateValue = [];
  for (let i = 0; i < labelRate.length; i += 1) {
    rateValue.push(labelRate[i].value);
  }
  rateForm.innerText += ` ${rateValue}`;
}

function formObs() {
  const obsForm = document.getElementById('obsForm');
  const textarea = document.getElementById('textarea');
  obsForm.innerText += ` ${textarea.value}`;
}

submitBtn.addEventListener('click',(e) => {
  e.preventDefault();
  const mainForm = document.querySelector('#evaluation-form');
  mainForm.style.display = 'none';
  resultForm.style.display = 'block';
  formName();
  formEmail();
  formHouse();
  formFamily();
  formMaterias();
  formRate();
  formObs()
})
