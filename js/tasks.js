'use strict';

{
  const rain = Math.round(Math.random());

  switch (rain) {
    case 1:
      console.log('Пошёл дождь. Возьмите зонт!');
      break;
    case 0:
      console.log('Дождя нет!');
      break;
  }
}


{
  const [mathExam, langExam, informExam] = prompt('Введите баллы за экзамены через пробел').split(' ');
  if (Number(mathExam) + Number(langExam) + Number(informExam) >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  } else {
    console.log('К сожалению, вы не прошли на бюджет');
  }
}


{
  const cash = prompt('Введите сумму для получения наличных');
  if (cash % 100 === 0) {
    console.log('Операция выполняется. Не забудьте деньги и карту');
  } else {
    console.log('Операция не может быть выполнена. Введите сумму кратную 100')
  }
}
