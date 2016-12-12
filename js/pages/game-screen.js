import renderPage from '../renderPage';
import level from './level';
import stats from './stats';
import {levels} from '../data/game-data';
import result from '../data/result';

let currentPage = 0;

const renderedLevels = levels.map((levelData) => level(levelData));

const changeLevel = () => {
  if (currentPage + 1 >= renderedLevels.length) {
    renderPage(stats(result));
    return;
  }

  currentPage++;
  renderPage(renderedLevels[currentPage]);
};

renderedLevels.forEach((renderedlevel) => {
  if (renderedlevel.querySelector('.game__content--triple')) {
    const answer = renderedlevel.querySelector('.game__option');
    answer.addEventListener('click', () => {
      changeLevel();
    });
  } else {
    const answer = renderedlevel.querySelector('input');
    answer.addEventListener('change', () => {
      changeLevel();
    });
  }
});

export default () => {
  return renderedLevels[0];
};
