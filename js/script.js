'use strict';


{
  const modWindow = document.querySelector('.overlay');
  const headModWindow = document.querySelector('.form__title');
  const buttonIdModWindow = document.querySelector('.form__id');
  const idModWindow = document.querySelector('.form__numb');
  const formModWindow = document.querySelector('.form');
  const checkbox = document.querySelector('.checkbox__input');
  const discount = document.querySelector('.form__input-discount');
  const totalCost = document.querySelector('.form__cost');
  const addButton = document.querySelector('.cms__add');
  const closeButton = document.querySelector('.form__close');


  // modWindow.classList.toggle('overlay-flex');
  addButton.addEventListener('click', () => {
    modWindow.classList.add('overlay-flex');
  });

  formModWindow.addEventListener('click', event => {
    event.stopPropagation();
  });

  modWindow.addEventListener('click', () => {
    modWindow.classList.remove('overlay-flex');
  });

  closeButton.addEventListener('click', () => {
    modWindow.classList.remove('overlay-flex');
  });
}
