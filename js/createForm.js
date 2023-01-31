export const createTd = (innerText) => {
  const newTd = document.createElement('td');
  newTd.classList.add('table__data');
  newTd.append(innerText);
  return newTd;
}


export const createRow = (obj) => {
  const newRow = document.createElement('tr');
  newRow.className = 'table__row';
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('table__button', 'delete__icon');
  const editBtn = document.createElement('button');
  editBtn.classList.add('table__button', 'edit__icon');
  const imageBtn = document.createElement('button');
  const images = obj.images;
  if (images) {
    imageBtn.classList.add('table__button', 'image__icon');
  } else {
    imageBtn.classList.add('table__button', 'no-image__icon');
  }
  const tdImage = createTd(imageBtn);
  const tdDelete = createTd(deleteBtn);
  const tdEdit = createTd(editBtn);
  const values = [obj.id, obj.title, obj.category, obj.units,
    obj.count, obj.price, obj.count * obj.price];
  const valuesWithTd = values.map(element => createTd(element));
  valuesWithTd.forEach(row => newRow.insertAdjacentElement('beforeend', row));
  newRow.append(tdImage, tdEdit, tdDelete);
  newRow.tdId = obj.id;
  newRow.tdPrice = obj.price;
  newRow.tdCount = obj.count;
  return newRow;
};
