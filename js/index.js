'use strict';
{
  const productName = "Swiss military Automatic Dive";
  let productCount = 5;
  const productCategory = "Watch";
  let productPrice = 51990;

  //количество и стоимость указала через let, потому что эти значения могут измениться (по логике)

  console.log('Наименование товара: ', productName);

  const productAmount = productCount * productPrice;
  console.log('Общая стоимость товара:', productAmount, 'рублей');
}

{
  const productName = prompt('Введите наименование товара:');
  console.log(typeof productName);
  const productCount = Number(prompt('Введите количество товара:'));
  console.log(typeof productCount);
  const productCategory = prompt('Введите категорию товара:');
  console.log(typeof productCategory);
  const productPrice = Number(prompt('Введите цену товара:'));
  console.log(typeof productPrice);

  console.log(`На складе ${productCount} единиц(ы) товара "${productName}" из категории ${productCategory} на сумму ${productCount * productPrice} рублей`);

}
