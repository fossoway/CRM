import { addDiscount, costInForm, addRowFromForm, formClose } from "./form.js";
import { renderGoods, resetCost, deleteRow } from './render.js';
import { URL, fetchRequest } from './goods.js';
import { showImage } from './createForm.js';


const init = async () => {

  const data = await fetchRequest(URL, {
    method: 'get',
    callback: renderGoods,
  });
  resetCost();
  formClose();
  deleteRow();
  addRowFromForm();
  addDiscount();
  costInForm();
  showImage();
}



window.formInitial = init;
