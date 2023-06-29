import {createRow} from './createForm.js';
import {tbody} from './form.js';
import { URLserver, fetchRequest } from './goods.js';

const deleteRow = () => {
  const table = document.querySelector('.table');
  table.addEventListener('click', async e => {
    if (e.target.closest('.delete__icon')) {
      const target = e.target.closest('.table__row');
      e.target.closest('.table__row').remove();
      resetCost();

      const delItem = `${URLserver}/${target.tdID}`;
      await fetchRequest(delItem, {
        method: 'delete'
      });
    }
  });
};


const renderGoods = (err, goods) => {

  if (err) {
    console.warn(err);
    const p = document.createElement('p');
    p.textContent = err;
    tbody.innerText = '';
    tbody.append(p);
    return;
  }

  const count = document.querySelector('.footer__count');
  count.innerText = goods.length;
  const render = goods.map(good => createRow(null, good));
  tbody.innerText = '';
  render.forEach(good => tbody.insertAdjacentElement('beforeend', good));
  return goods;
};


const resetCost = () => {
  const headerCost = document.querySelector('.header__cost');
  const [...allRow] = document.querySelectorAll('.table__row');
  headerCost.innerHTML = `
    ${(allRow.reduce((amount, elem) => elem.tdCount * elem.tdPrice + amount, 0)).toFixed(2)} ₽
    `;
};


export {resetCost, renderGoods, deleteRow};
