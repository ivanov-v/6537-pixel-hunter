import getElement from '../getElement';
import statsResult from '../templates/statsResult';
import heart from '../templates/heart';
import backButton from '../templates/backButton';
import renderPage from '../renderPage';
import stats from './stats';

const template =
  `<div id="game-3">
    <header class="header">
      ${backButton}
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        ${heart('empty')}
        ${heart('full')}
        ${heart('full')}
      </div>
    </header>
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
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
