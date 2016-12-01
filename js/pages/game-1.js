import getElement from '../getElement';
import renderPage from '../renderPage';
import game2 from './game-2';
import gameTask from '../templates/gameTask';
import gameStats from '../templates/gameStats';
import header from '../templates/header';
import gameContent from '../templates/gameContent';

const game = {
  type: 'answers-2',
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
      ${gameContent(game.question.options)}
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
