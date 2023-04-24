import { resetCost} from './render.js';
import { createRow } from './createForm.js';
import { URL, fetchRequest } from './goods.js';
import { createModal } from './modal.js';


export const tbody = document.querySelector('tbody');


const addRowFromForm = (form, overlay) => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newGood = Object.fromEntries(formData);
    const good = await fetchRequest(URL, {
      method: 'post',
      body: newGood,
      callback: createRow,
    });
    tbody.append(good);
    resetCost();
    overlay.remove();
  });
};

//const editGood = (form, id) => {
//  form.addEventListener('submit', async e => {
//    e.preventDefault();
//    const formData = new FormData(e.target);
//    const newGood = Object.fromEntries(formData);
//    console.log(newGood);
//    const editItem = `${URL}/${id}`;
//    const good = await fetchRequest(editItem, {
//      method: 'patch',
//      body: newGood,
//    });
//    resetCost();
//    overlay.remove();
//  })
//};

const formOpen = () => {
  const addButton = document.querySelector('.cms__add');
  addButton.addEventListener('click', () => {
    createModal(null, null);
  })
};


export { addRowFromForm, formOpen };
