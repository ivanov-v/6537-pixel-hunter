import getElement from '../getElement';
import renderPage from '../renderPage';
import gameTask from '../templates/gameTask';
import stats from './stats';
import gameStats from '../templates/gameStats';
import header from '../templates/header';

const game = {
  statusbar: {
    time: 'NN',
    lives: 1
  },
  task: 'Найдите рисунок среди изображений',
  stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown']
};

const template =
  `<div id="game-3">
    ${header(game.statusbar)}
    <div class="game">
      ${gameTask(game.task)}
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        ${gameStats(game.stats)}
      </div>
    </div>
  </div>`;

const templateElem = getElement(template);
export default templateElem;

const answers = templateElem.querySelectorAll('.game__option');

const answerHandler = () => renderPage(stats);

[].forEach.call(answers, (answer) => {
  answer.addEventListener('click', answerHandler);
});
