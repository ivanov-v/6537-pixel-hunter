import getElement from '../getElement';
import renderPage from '../renderPage';
import game3 from './game-3';
import gameTask from '../templates/gameTask';
import gameStats from '../templates/gameStats';
import header from '../templates/header';

const game = {
  statusbar: {
    time: 'NN',
    lives: 2
  },
  task: 'Угадайте, фото или рисунок?',
  stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown']
};

const template =
  `<div id="game-2">
    ${header(game.statusbar)}
    <div class="game">
      ${gameTask(game.task)}
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${gameStats(game.stats)}
      </div>
    </div>
  </div>`;

const templateElem = getElement(template);
export default templateElem;

const answers = templateElem.querySelectorAll('input');

const answerHandler = () => renderPage(game3);

[].forEach.call(answers, (answer) => {
  answer.addEventListener('change', answerHandler);
});
