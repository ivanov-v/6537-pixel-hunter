import getElement from '../getElement';
import header from '../templates/header';
import gameStats from '../templates/gameStats';
import gameContent from '../templates/gameContent';

export default (data) => {
  const template =
    `<div>
      ${header(data.statusbar)}
      <div class="game">
        ${gameContent(data)}
        <div class="stats">
          ${gameStats(data.stats)}
        </div>
      </div>
    </div>`;

  return getElement(template);
};
