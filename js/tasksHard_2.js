'use strict';


{
  const salary = prompt('Укажите ваш доход:');
  let tax = 0;
  if (salary < 15000) {
    tax = salary * 0.13;
    console.log(`Заплатите налог ${tax.toFixed(2)} руб. и живите спокойно`)
  }

  if (salary >= 15000 && salary < 50000) {
    tax = 15000 * 0.13 + (salary - 15000) * 0.2;
    console.log(`Заплатите налог ${tax.toFixed(2)} руб. и живите спокойно`)
  }

  if (salary >= 50000) {
    tax = 15000 * 0.13 + 35000 * 0.2 + (salary - 50000) * 0.3;
    console.log(`Заплатите налог ${tax.toFixed(2)} руб. и живите спокойно`)
  }
}
