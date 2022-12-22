'use strict';


{
  const guessNumber = () => {
    const [n, m] = prompt('Введите диапазон через пробел').split(' ');
    const start = Math.min(n, m);
    const end = Math.max(n, m);
    let tryCount = Math.ceil((end - start) * 0.3);
    const number = start + Math.floor(Math.random() * (end - start + 1));
    const tryArray = [];
    alert(`Я загадал число в диапазоне от ${start} до ${end}. У вас ${tryCount} попыток, чтобы угадать!`);

    const askAnswer = (number, tryCount, tryArray) => {
      const answer = prompt('Введите ваш варианта ответа:');

      if (!Number.isInteger(Number(answer))) {
        alert('Это не число!');
        return askAnswer(number, tryCount, tryArray);
      }

      if (answer === null) {
        alert('Игра завершена');
        return 'Игра завершена';
      }

      if (tryArray.includes(answer)) {
        alert('Это число вы уже вводили');
        return askAnswer(number, tryCount, tryArray);
      } else {
        tryArray.push(answer);
        tryCount -= 1;
      }

      if (answer > number) {
        alert(`Меньше! У вас осталось ${tryCount} попыток.`);
        return askAnswer(number, tryCount, tryArray);
      }

      if (answer < number) {
        alert(`Больше! У вас осталось ${tryCount} попыток.`);
        return askAnswer(number, tryCount, tryArray);
      }

      if (answer === number) {
        alert(`Верно! Вы победили!`);
        return 'Победа!';
      }

      if (tryCount === 0) {
        alert(`У вас закончились попытки`);
        return 'Вы проиграли';
      }

    }

    return askAnswer(number, tryCount, tryArray);
  }


  console.log(guessNumber());
}
