'use strict';


const modWindow = document.querySelector('.overlay');
const headModWindow = document.querySelector('.form__title');
const buttonIdModWindow = document.querySelector('.form__id');
const idModWindow = document.querySelector('.form__numb');
const addButton = document.querySelector('.cms__add');
const closeButton = document.querySelector('.form__close');
const table = document.querySelector('.table');
const headerCost = document.querySelector('.header__cost');


const formClose = () => {
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

table.addEventListener('click', e => {
  if (e.target.closest('.delete__icon')) {
    const target = e.target.closest('.table__row');
    e.target.closest('.table__row').remove();
    resetCost();

    const found = goods.findIndex(elem => elem.id === target.tdId);

    goods.splice(found, 1);
    console.log(goods);
  }
});
