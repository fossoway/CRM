'use strict';

(() => {
  const FIGURES = {
    RUS: ['ножницы', 'камень', 'бумага'],
    ENG: ['scissor', 'rock', 'paper'],
  };

  const PLAYER = {
    RUS: 'Вы',
    ENG: 'You',
  };

  const COMP = {
    RUS: 'Компьютер',
    ENG: 'Computer',
  };

  const WIN = {
    RUS: 'Вы победили',
    ENG: 'You win',
  };

  const LOSE = {
    RUS: 'Компьютер выиграл',
    ENG: 'Computer win',
  };

  const DRAW = {
    RUS: 'Ничья',
    ENG: 'Draw',
  };

  const AGAIN = {
    RUS: 'Еще раз?',
    ENG: 'Again?',
  };

  const SURE = {
    RUS: 'Вы уверены?',
    ENG: 'Are you sure?',
  };

  const SCORE = {
    RUS: 'Счет',
    ENG: 'Score',
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    const dict = lang === 'ENG' || lang === 'EN' ?
      FIGURES.ENG : FIGURES.RUS;
    const step = getRandomIntInclusive(0, 2);
    return dict[step];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'ENG' || language === 'EN' ?
      'ENG' : 'RUS';


    const figures = FIGURES[lang];

    return function start() {
      let playerTurn = (prompt(`${FIGURES[lang]}?`)).toLowerCase();
      if (!figures.some(figure => figure.includes(playerTurn))) {
        return start();
      } else {
        playerTurn = figures.find(figure => figure.includes(playerTurn));
      }

      const computerTurn = getFigure(lang);

      const anotherGame = (lang) => {
        let question = confirm(`${AGAIN[lang]}`);
        if (question === false) {
          question = confirm(`${SURE[lang]}`);
          if (question) {
            alert(`${SCORE[lang]}:
          ${PLAYER[lang]}:${result.player}\n${COMP[lang]}:${result.computer}`);
            return `Игра завершена`;
          }
        }
        return start();
      };

      if (playerTurn === computerTurn) {
        alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
        ${DRAW[lang]}`);
        return anotherGame(lang);
      }
      if (playerTurn === 'камень' || playerTurn === 'rock') {
        if (computerTurn === 'ножницы' || computerTurn === 'scissor') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${WIN[lang]}`);
          result.player += 1;
          return anotherGame(lang);
        } else if (computerTurn === 'бумага' || computerTurn === 'paper') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${LOSE[lang]}`);
          result.computer += 1;
          return anotherGame(lang);
        }
      }

      if (playerTurn === 'бумага' || playerTurn === 'paper') {
        if (computerTurn === 'ножницы' || computerTurn === 'scissor') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${LOSE[lang]}`);
          result.computer += 1;
          return anotherGame(lang);
        } else if (computerTurn === 'камень' || computerTurn === 'rock') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${WIN[lang]}`);
          result.player += 1;
          return anotherGame(lang);
        }
      }

      if (playerTurn === 'ножницы' || playerTurn === 'scissor') {
        if (computerTurn === 'камень' || computerTurn === 'rock') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${LOSE[lang]}`);
          result.computer += 1;
          return anotherGame(lang);
        } else if (computerTurn === 'бумага' || computerTurn === 'paper') {
          alert(`${PLAYER[lang]}: ${playerTurn}\n${COMP[lang]}: ${computerTurn}
          ${WIN[lang]}`);
          result.player += 1;
          return anotherGame(lang);
        }
      }
    };
  };


  window.startGame = game;
})();
