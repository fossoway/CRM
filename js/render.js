import {createRow} from './createForm.js';


const deleteRow = (goods) => {
  const table = document.querySelector('.table');
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
};


const renderGoods = (goods) => {
  const render = goods.map(good => createRow(good));
  const row = document.querySelector('tbody');
  row.innerText = '';
  render.forEach(good => row.insertAdjacentElement('beforeend', good));
};


const resetCost = () => {
  const headerCost = document.querySelector('.header__cost');
  const [...allRow] = document.querySelectorAll('.table__row');
  const total = allRow.reduce((amount, elem) => elem.tdCount * elem.tdPrice + amount, 0);
  headerCost.innerHTML = total;
};


export {resetCost, renderGoods, deleteRow};
