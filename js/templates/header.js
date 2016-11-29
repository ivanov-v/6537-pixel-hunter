import backButton from '../templates/backButton';
import gameLives from '../templates/gameLives';
import gameTimer from '../templates/gameTimer';

export default (options) => {
  let mainContent;

  if (options) {
    mainContent = `${backButton}${gameTimer(options.time)}${gameLives(options.lives)}`;
  } else {
    mainContent = `${backButton}`;
  }

  return `<header class="header">${mainContent}</header>`;
};
