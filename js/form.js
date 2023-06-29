import { resetCost} from './render.js';
import { createRow } from './createForm.js';
import { URLserver, fetchRequest } from './goods.js';
import { createModal } from './modal.js';
import { modal } from './error.js';

export const tbody = document.querySelector('tbody');

const addRowFromForm = (form, overlay, id) => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const description = document.querySelector('#description');
    if (description.value.length >= 80) {

      if (id) {
        const formData = new FormData(e.target);
        const img = document.querySelector('#image');
        const newGood = Object.fromEntries(formData);
        if (img.files[0] && img.files[0].size < 1048576) {
          newGood.image = await toBase64(img.files[0]);
        }
        newGood.count = +newGood.count;
        newGood.price = +newGood.price;
        const editItem = `${URLserver}/${id}`;
        const good = await fetchRequest(editItem, {
          method: 'PATCH',
          body: newGood,
        });
        resetCost();
        overlay.remove();
      } else {
        const formData = new FormData(e.target);
        const newGood = Object.fromEntries(formData);
        const img = document.querySelector('#image');
        if (img.files[0] && img.files[0].size < 1048576) {
          newGood.image = await toBase64(img.files[0]);
        }
        const good = await fetchRequest(URLserver, {
          method: 'post',
          body: newGood,
          callback: createRow,
        });
        tbody.append(good);
        resetCost();
        overlay.remove();
      }
    } else {
      const error = modal('В описании должно быть не менее 80 символов');
      form.append(error);
    }
  });
};

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.addEventListener('loadend', () => {
    resolve(reader.result);
  });
  reader.addEventListener('error', err => {
    reject(err);
  });

  reader.readAsDataURL(file);
});

const formOpen = () => {
  const addButton = document.querySelector('.cms__add');
  addButton.addEventListener('click', () => {
    createModal(null, null);
  })
};


export { addRowFromForm, formOpen };
