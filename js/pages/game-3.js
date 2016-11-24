import getElement from '../getElement';
import statsResult from '../templates/statsResult';
import backButton from '../templates/backButton';
import renderPage from '../renderPage';
import stats from './stats';
import gameTimer from '../templates/gameTimer';
import gameTask from '../templates/gameTask';
import gameLives from '../templates/gameLives';

const template =
  `<div id="game-3">
    <header class="header">
      ${backButton}
      ${gameTimer()}
      ${gameLives(1)}
    </header>
    <div class="game">
      ${gameTask('Найдите рисунок среди изображений')}
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
        <ul class="stats">
          ${statsResult('wrong')}
          ${statsResult('slow')}
          ${statsResult('fast')}
          ${statsResult('correct')}
          ${statsResult('wrong')}
          ${statsResult('unknown')}
          ${statsResult('slow')}
          ${statsResult('unknown')}
          ${statsResult('fast')}
          ${statsResult('unknown')}
        </ul>
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
