'use strict';

const productName = "Swiss military Automatic Dive";
let productCount = 5;
const productCategory = "Watch";
let productPrice = 51990;

//количество и стоимость указала через let, потому что эти значения могут измениться (по логике)

console.log('Наименование товара: ', productName);

const productAmount = productCount * productPrice;
console.log('Общая стоимость товара:', productAmount, 'рублей');
