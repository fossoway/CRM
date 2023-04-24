import { addRowFromForm, formOpen } from "./form.js";
import { renderGoods, resetCost, deleteRow } from './render.js';
import { URL, fetchRequest } from './goods.js';
import { showImage } from './createForm.js';


const init = async () => {

  const data = await fetchRequest(URL, {
    method: 'get',
    callback: renderGoods,
  });
  resetCost();
  formOpen();
  deleteRow();
  //addRowFromForm();
  showImage();
}



window.formInitial = init;
