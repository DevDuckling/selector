// ----------------Input Selected--------------
const firstInput = document.querySelector('#ia');
const secondInput = document.querySelector('#ib');

// ---------------Buttons Selected--------------
const qs = document.querySelector('.qs');
const qsa = document.querySelector('.qsa');
const btnContainer = document.querySelector('main > div:nth-child(4)');

// ----------------Selecting Result------------
const p = document.querySelector('.res');

// --------------Logic----------------------
qs.addEventListener('click', ()=>p.innerText = `const ${firstInput.value} = document.querySelector('${secondInput.value}')`)

qsa.addEventListener('click', ()=>p.innerText = `const ${firstInput.value} = document.querySelectorAll('${secondInput.value}')`)

// -----------------Creating New Element-------------
const qc = document.createElement('input');
qc.setAttribute('type','submit');
qc.value = "Clear";
btnContainer.append(qc)

qc.addEventListener('click', () => {p.innerText = ''; firstInput.value = ''; secondInput.value = '';})
