export const modal = (err) => {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('error');
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('error__close');

  closeBtn.addEventListener('click', () => {
    modalWindow.remove();
  });

  const errorImg = document.createElement('div');
  errorImg.classList.add('error__img');
  const errorDisc = document.createElement('p');
  errorDisc.classList.add('error__description');

  if (err) {
    errorDisc.innerText = err;
  } else {
    errorDisc.innerText = 'Что-то пошло не так...';
  }

  modalWindow.append(closeBtn, errorImg, errorDisc);

  return modalWindow
};
