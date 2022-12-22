'use strict';


{
  const guessNumber = () => {
    const number = Math.round(Math.random() * 100);

    const askAnswer = (number) => {
      const answer = Number(prompt('Введите ответ:'));

      if (answer === number) {
        alert('Верно! Вы победили');
        return 'Победа!';
      }
      if (answer === 0) {
        alert('Игра завершена');
        return 'Игра завершена';
      }
      if (Number.isNaN(answer)) {
        alert('Это не число.');
        return askAnswer(number);
      }
      if (answer > number) {
        alert('Меньше!');
        return askAnswer(number);
      }
      if (answer < number) {
        alert('Больше!');
        return askAnswer(number);
      }
    }
    return askAnswer(number);
}

console.log(guessNumber());

}
