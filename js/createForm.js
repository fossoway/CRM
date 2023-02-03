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
    imageBtn.dataset.pic=images.big;
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


export const showImage = () => {
  const table = document.querySelector('.table');
  table.addEventListener('click', e => {
    if (e.target.closest('.image__icon')) {
      const imageUrl = e.target.closest('.image__icon').dataset.pic;
      const win = open('about:blank', '', 'width=600,height=600');
      win.moveTo(screen.width/2 - 300, screen.height/2 - 300);
      const image = document.createElement('img');
      image.src = imageUrl;
      image.width = 550;
      image.height = 550;
      win.document.body.append(image);
    }
  });
};
