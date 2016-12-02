import getElement from '../getElement';
import renderPage from '../renderPage';
import gameTask from '../templates/gameTask';
import stats from './stats';
import gameStats from '../templates/gameStats';
import header from '../templates/header';
import gameContent from '../templates/gameContent';
import {levels, levelsNames} from '../data/game-data';

const game = levels[levelsNames.GAME3];

const template =
  `<div>
    ${header(game.statusbar)}
    <div class="game">
      ${gameTask(game.question.description)}
      ${gameContent(game)}
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
