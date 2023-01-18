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
  const table = document.querySelector('.table');


  // modWindow.classList.toggle('overlay-flex');
  addButton.addEventListener('click', () => {
    modWindow.classList.add('overlay-flex');
  });

  modWindow.addEventListener('click', e => {
    const target = e.target;
    if (target === modWindow || target.closest('.form__close')) {
      modWindow.classList.remove('overlay-flex');
    }
  });

  table.addEventListener('click', e => {
    if (e.target.closest('.delete__icon')) {
      const target = e.target.closest('.table__row');
      e.target.closest('.table__row').remove();
      let found = 0;

      for (found; found < goods.length; found += 1) {
        if (goods[found].id === target.tdId) {
          goods.splice(found, 1);
          console.log(goods);
        }
      }
    }
  });

}
