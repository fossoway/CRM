import {resetCost} from './render.js';
import {createRow} from './createForm.js';
import {goods} from './script.js';


const formClose = () => {
  const modWindow = document.querySelector('.overlay');
  const addButton = document.querySelector('.cms__add');
  addButton.addEventListener('click', () => {
    const id = document.querySelector('.form__numb');
    id.innerText = Math.round(Math.random() * 1000000000);
    modWindow.classList.add('overlay-flex');
  });

  modWindow.addEventListener('click', e => {
    const target = e.target;
    if (target === modWindow || target.closest('.form__close')) {
      modWindow.classList.remove('overlay-flex');
    }
  });
};


const addRowFromForm = () => {
  const totalCost = document.querySelector('.form__cost');
  const form = document.querySelector('.form__form');
  form.addEventListener('submit', e => {
    const modWindow = document.querySelector('.overlay');
    e.preventDefault();
    const id = document.querySelector('.form__numb');
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    newGood.id = id.innerText;
    goods.push(newGood);
    totalCost.innerText = newGood.coast * newGood.count;
    const row = document.querySelector('tbody');
    row.append(createRow(newGood));
    resetCost();
    form.reset();
    modWindow.classList.remove('overlay-flex');
  });
};


const costInForm = () => {
  const totalCost = document.querySelector('.form__cost');
  const form = document.querySelector('.form__form');
  totalCost.innerText = 0;
  form.addEventListener('change', e => {
    const count = document.querySelector('#count');
    const price = document.querySelector('#price');
    totalCost.innerText = count.value * price.value;
  });
};


const addDiscount = () => {
  const discount = document.querySelector('.form__input-discount');
  const checkbox = document.querySelector('.checkbox__input');
  checkbox.addEventListener('change', e => {
    if (checkbox.checked) {
      discount.removeAttribute('disabled');
    } else {
      discount.value = '';
      discount.setAttribute('disabled', 'true');
    }
  });
};


export { addDiscount, costInForm, addRowFromForm, formClose };
