'use strict';


{
  const a = Number(prompt('Введите первое число:'));
  const b = Number(prompt('Введите второе число:'));


  const getMinNum = (a, b) => {
    const minNum = (a > b) * b + (a < b) * a;
    return `Число ${minNum} меньше!`
  }


  console.log(getMinNum(a, b));
}
