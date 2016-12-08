import renderPage from '../renderPage';
import level from './level';
import {levels, LevelType} from '../data/game-data';

let currentPage = 0;

const getLevelElement = (levelData) => {
  const levelElement = level(levelData);
  let answers;

  if (levelData.type === LevelType.ANSWERS_3) {
    answers = levelElement.querySelectorAll('.game__option');
  } else {
    answers = levelElement.querySelectorAll('.game__answer');
  }

  console.log(levelData.type);

  [].forEach.call(answers, (answer) => {
    answer.addEventListener('click', () => {
      currentPage++;
      if (currentPage > levels.length) {
        renderPage(stats);
      }
      renderPage(getLevelElement(levels[currentPage]));
    });
  });

  return levelElement;
};

export default () => {
  currentPage = 0;
  return getLevelElement(levels[currentPage]);
};
