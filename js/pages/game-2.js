import getElement from '../getElement';
import renderPage from '../renderPage';
import game3 from './game-3';
import statsResult from '../templates/statsResult';
import heart from '../templates/heart';
import backButton from '../templates/backButton';

const template =
  `<div id="game-2">
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
      <p class="game__task">Угадай, фото или рисунок?</p>
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

const answers = templateElem.querySelectorAll('input');

const answerHandler = () => renderPage(game3);

[].forEach.call(answers, (answer) => {
  answer.addEventListener('change', answerHandler);
});
