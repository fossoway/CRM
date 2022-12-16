'use strict';


{
  const productName = prompt('Введите наименование товара:');
  const productCount = Number(prompt('Введите количество товара:'));
  const productCategory = prompt('Введите категорию товара:');
  const productPrice = Number(prompt('Введите цену товара:'));
  if (Number.isInteger(productCount) && Number.isInteger(productPrice)) {
    console.log(`На складе ${productCount} единиц(ы) товара "${productName}" из категории ${productCategory} на сумму ${productCount * productPrice} рублей`);
  } else {
    console.log('Вы ввели некорректные данные')
  }
}
