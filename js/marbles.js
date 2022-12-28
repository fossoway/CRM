'use strict';


(() => {
  const figures = {
    'камень': ['к', 'камень', 'кам'],
    'бумага': ['б', 'бумага', 'бум'],
    'ножницы': ['н', 'ножницы', 'ножн', 'нож'],
  };

  const parity = ['четное', 'нечетное'];

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

  const isEven = (num) => num % 2 === 0 ? 'четное' : 'нечетное';

  const rps = () => {
    let playerTurn = (prompt(`${Object.keys(figures)}?`));
    if (playerTurn === null) {
      const exit = confirm(`Хотите завершить игру?`);
      if (exit) {
        alert(`Игра завершена`);
        return 'End';
      } else {
        return rps();
      }
    }

    playerTurn = playerTurn.toLowerCase();
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

      setPlayer(n) {
        if (this.player + n < 0) {
          this.player = 0;
        } else if (this.player + n > 10) {
          this.player = 10;
        } else {
          this.player = this.player + n;
        }
      },

      setComputer(n) {
        if ((this.computer + n) < 0) {
          this.computer = 0;
        } else if (this.computer + n > 10) {
          this.computer = 10;
        } else {
          this.computer = this.computer + n;
        }
      },
    };

    let score = 0;

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
        if (result.player === 0) {
          alert(`Вы проиграли`);
          return anotherGame();
        }

        if (result.computer === 0) {
          alert(`Вы победили!`);
          return anotherGame();
        }

        const playerTurn = Number(prompt(`Ваш ход.
        Загадайте число от 1 до ${result.player}`));

        if (playerTurn === 0) {
          const exit = confirm(`Хотите завершить игру?`);
          if (exit) {
            alert(`Игра завершена`);
            return 'End';
          } else {
            return player();
          }
        }

        if (playerTurn < 1 || playerTurn > result.player
          || Number.isNaN(playerTurn)) {
          return player();
        }

        const compTurn = getParity();
        if (isEven(playerTurn) === compTurn) {
          result.setPlayer(-playerTurn);
          result.setComputer(playerTurn);
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nБот угадал!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return computer();
        } else {
          result.setPlayer(playerTurn);
          result.setComputer(-playerTurn);
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

        if (playerTurn === null) {
          const exit = confirm(`Хотите завершить игру?`);
          if (exit) {
            alert(`Игра завершена`);
            return 'End';
          } else {
            return computer();
          }
        }

        playerTurn = playerTurn.toLowerCase();
        if (playerTurn === 'четное' || playerTurn === 'чётное'
          || playerTurn === 'ч' || playerTurn === 'чет') {
          playerTurn = 'четное';
        } else if (playerTurn === 'нечетное' || playerTurn === 'нечётное'
          || playerTurn === 'н' || playerTurn === 'нечет') {
          playerTurn = 'нечетное';
        } else {
          return computer();
        }

        if (isEven(compTurn) === playerTurn) {
          result.setPlayer(compTurn);
          result.setComputer(-compTurn);
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nВы угадали!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return player();
        } else {
          result.setPlayer(-compTurn);
          result.setComputer(compTurn);
          alert(`Вы: ${playerTurn}\nБот: ${compTurn}\nВы не угадали!
          Ваш счет: ${result.player}
          Счет бота: ${result.computer}`);
          return player();
        }
      };

      const whoWin = rps();
      if (whoWin === 'player') {
        alert(`Ваш ход первый!`);
        return player();
      } else if (whoWin === 'End') {
        return 'Игра завершена';
      } else {
        alert(`Первый ход за ботом!`);
        return computer();
      }
    };
  };

  window.startGame = game;
})();
