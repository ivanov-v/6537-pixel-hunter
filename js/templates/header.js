import backButton from '../templates/backButton';
import gameLives from '../templates/gameLives';
import gameTimer from '../templates/gameTimer';

export default (options) => {
  let mainContent = `${backButton}`;

  if (options) {
    mainContent += `${gameTimer(options.time)}${gameLives(options.lives)}`;
  }

  return `<header class="header">${mainContent}</header>`;
};
