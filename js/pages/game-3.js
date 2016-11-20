import getElementFromTemplate from '../getElementFromTemplate';
import statsResult from '../templates/statsResult';
import renderPage from '../renderPage';
import stats from './stats';

const template =
  `<div id="game-3">
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">NN</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
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

const templateElem = getElementFromTemplate(template);
export default templateElem;

const answers = templateElem.querySelectorAll('.game__option');

const answerHandler = (evt) => {
  renderPage(stats);
};

[].forEach.call(answers, (answer) => {
  answer.addEventListener('click', answerHandler);
});
