import getElement from '../getElement';
import header from '../templates/header';
import gameTask from '../templates/gameTask';
import gameStats from '../templates/gameStats';
import gameContent from '../templates/gameContent';

export default (data) => {
  const template =
    `<div>
      ${header(data.statusbar)}
      <div class="game">
        ${gameTask(data.question.description)}
        ${gameContent(data)}
        <div class="stats">
          ${gameStats(data.stats)}
        </div>
      </div>
    </div>`;

  return getElement(template);
};
