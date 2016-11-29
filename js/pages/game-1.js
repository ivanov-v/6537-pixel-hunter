import getElement from '../getElement';
import renderPage from '../renderPage';
import game2 from './game-2';
import gameTask from '../templates/gameTask';
import gameStats from '../templates/gameStats';
import header from '../templates/header';

const game = {
  statusbar: {
    time: 'NN',
    lives: 3
  },
  question: {
    description: 'Угадайте для каждого изображения фото или рисунок?',
    options: [
      {
        image: 'http://placehold.it/468x458',
        answers: [
          {
            type: 'photo',
            correct: true
          },
          {
            type: 'paint',
            correct: false
          }
        ]
      },
      {
        image: 'http://placehold.it/468x458',
        answers: [
          {
            type: 'photo',
            correct: false
          },
          {
            type: 'paint',
            correct: true
          }
        ]
      }
    ]
  },
  stats: ['wrong', 'slow', 'fast', 'correct', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown']
};

const template =
  `<div id="game-1">
    ${header(game.statusbar)}
    <div class="game">
      ${gameTask(game.question.description)}
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${gameStats(game.stats)}
      </div>
    </div>
  </div>`;

const templateElem = getElement(template);
export default templateElem;

const answers = templateElem.querySelectorAll('input');

const answerHandler = () => renderPage(game2);

[].forEach.call(answers, (answer) => {
  answer.addEventListener('change', answerHandler);
});
