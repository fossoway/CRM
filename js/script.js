import { formOpen } from "./form.js";
import { renderGoods, resetCost, deleteRow } from './render.js';
import { URLserver, fetchRequest } from './goods.js';
import { showImage } from './createForm.js';
import { debouncedSearch } from "./search.js";


const init = async () => {

  const data = await fetchRequest(URLserver, {
    method: 'get',
    callback: renderGoods,
  });
  const searchInput = document.querySelector('.cms__input');
  searchInput.addEventListener('input', debouncedSearch);
  resetCost();
  formOpen();
  deleteRow();
  showImage();
}



window.formInitial = init;
