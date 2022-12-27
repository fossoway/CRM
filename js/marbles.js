'use strict';


(() => {
  const figures = {
    'камень': ['к', 'камень', 'кам'],
    'бумага': ['б', 'бумага', 'бум'],
    'ножницы': ['н', 'ножницы', 'ножн', 'нож'],
  };

  const parity = ['even', 'odd'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = () => {
    const figure = Object.keys(figures);
    const step = getRandomIntInclusive(0, 2);
    return figure[step];
  };

  const getParity = () => {
    const step = getRandomIntInclusive(0, 1);
    return parity[step];
  };

  const isEven = (num) => num % 2 === 0 ? 'even' : 'odd';

  const rps = () => {
    let playerTurn = (prompt(`${Object.keys(figures)}?`)).toLowerCase();
    const entries = Object.entries(figures);
    const entriesFilter = entries.filter(
        ([key, value]) => value.includes(playerTurn));
    if (entriesFilter.length === 0) {
      return rps();
    } else {
      playerTurn = entriesFilter[0][0];
    }
    const computerTurn = getFigure();

    if (playerTurn === computerTurn) {
      alert(`Вы: ${playerTurn}\nКомпьютер: ${computerTurn}\nНичья!`);
      return rps();
    }

    if ((playerTurn === 'камень' || playerTurn === 'rock') &&
      (computerTurn === 'ножницы' || computerTurn === 'scissor') ||
      (playerTurn === 'бумага' || playerTurn === 'paper') &&
      (computerTurn === 'камень' || computerTurn === 'rock') ||
      (playerTurn === 'ножницы' || playerTurn === 'scissor') &&
      (computerTurn === 'бумага' || computerTurn === 'paper')) {
      alert(`Вы: ${playerTurn}\nКомпьютер: ${computerTurn}\nВы победили`);
      return 'player';
    } else {
      alert(`Вы: ${playerTurn}\nКомпьютер: ${computerTurn}\nВы проиграли`);
      return 'computer';
    }
  };
  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };

    const anotherGame = () => {
      const question = confirm(`Хотите сыграть еще?`);
      if (question === false) {
        console.log(`Игра завершена. Счет:
        Вы: ${result.player}
        Бот: ${result.computer}`);
        return `Игра завершена`;
      }
      result.player = 5;
      result.computer = 5;
      return start();
    };

    return function start() {
      const player = () => {
        if (result.player <= 0) {
          alert(`Вы проиграли`);
          return anotherGame();
        }

        if (result.computer <= 0) {
          alert(`Вы победили!`);
          return anotherGame();
        }

        const playerTurn = Number(prompt(`Ваш ход.
        Загадайте число от 1 до ${result.player}`));

        if (playerTurn < 1 || playerTurn > result.player
          || Number.isNaN(playerTurn)) {
          return player();
        }

        const compTurn = getParity();
        if (isEven(playerTurn) === compTurn) {
          result.player -= playerTurn;
          result.computer += playerTurn;
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nБот угадал!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return computer();
        } else {
          result.player += playerTurn;
          result.computer -= playerTurn;
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nБот не угадал!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return computer();
        }
      };

      const computer = () => {
        if (result.player <= 0) {
          alert(`Вы проиграли`);
          return anotherGame();
        }

        if (result.computer <= 0) {
          alert(`Вы победили!`);
          return anotherGame();
        }

        const compTurn = getRandomIntInclusive(1, result.computer);
        let playerTurn = prompt(`Ход бота.
        Компьютер загадал число. Четное или нечетное?`);

        if (playerTurn === 'четное' || playerTurn === 'чётное'
          || playerTurn === 'ч' || playerTurn === 'чет') {
          playerTurn = 'even';
        } else if (playerTurn === 'нечетное' || playerTurn === 'нечётное'
          || playerTurn === 'н' || playerTurn === 'нечет') {
          playerTurn = 'odd';
        } else {
          return computer();
        }

        if (isEven(compTurn) === playerTurn) {
          result.player += compTurn;
          result.computer -= compTurn;
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nВы угадали!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return player();
        } else {
          result.player -= compTurn;
          result.computer += compTurn;
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nВы не угадали!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return player();
        }
      };

      if (rps() === 'player') {
        alert(`Ваш ход первый!`);
        return player();
      } else {
        alert(`Первый ход за ботом!`);
        return computer();
      }
    };
  };

  window.startGame = game;
})();
