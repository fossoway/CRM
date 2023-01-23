'use strict';


const form = document.querySelector('.form__form');
const checkbox = document.querySelector('.checkbox__input');
const discount = document.querySelector('.form__input-discount');
const totalCost = document.querySelector('.form__cost');
const formAdd = document.querySelector('.form__button');


totalCost.innerText = 0;


form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newGood = Object.fromEntries(formData);
  goods.push(newGood);
  totalCost.innerText = newGood.coast * newGood.count;
  const row = document.querySelector('tbody');
  row.append(createRow(newGood));
  resetCost();
  form.reset();
  modWindow.classList.remove('overlay-flex');
});


form.addEventListener('change', e => {
  const count = document.querySelector('#count');
  const price = document.querySelector('#price');
  totalCost.innerText = count.value * price.value;
})


checkbox.addEventListener('change', e => {
  if (checkbox.checked) {
    discount.removeAttribute('disabled');
  } else {
    discount.value = '';
    discount.setAttribute('disabled', 'true');
  }
});


