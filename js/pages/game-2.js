import getElement from '../getElement';
import renderPage from '../renderPage';
import game3 from './game-3';
import statsResult from '../templates/statsResult';
import backButton from '../templates/backButton';
import gameTimer from '../templates/gameTimer';
import gameTask from '../templates/gameTask';
import gameLives from '../templates/gameLives';

const template =
  `<div id="game-2">
    <header class="header">
      ${backButton}
      ${gameTimer()}
      ${gameLives(2)}
    </header>
    <div class="game">
      ${gameTask('Угадай, фото или рисунок?')}
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
