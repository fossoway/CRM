import { resetCost} from './render.js';
import { createRow } from './createForm.js';
import { URL, fetchRequest } from './goods.js';


export const tbody = document.querySelector('tbody');

const formClose = () => {
  const modWindow = document.querySelector('.overlay');
  const addButton = document.querySelector('.cms__add');
  addButton.addEventListener('click', () => {
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
  form.addEventListener('submit', async e => {
    const modWindow = document.querySelector('.overlay');
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    totalCost.innerText = newGood.coast * newGood.count;
    const good = await fetchRequest(URL, {
      method: 'post',
      body: newGood,
      callback: createRow,
    });
    tbody.append(good);
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
