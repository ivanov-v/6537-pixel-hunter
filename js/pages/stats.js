import getElement from '../getElement';
import header from '../templates/header';
import resultTable from '../templates/resultTable';
import {stats} from '../data/game-data';

const result = {
  verdict: 'Победа!',
  levels: [
    {
      mainStats: {
        passed: true,
        stats: [stats.CORRECT, stats.SLOW, stats.FAST, stats.CORRECT, stats.WRONG, stats.UNKNOWN, stats.SLOW, stats.SLOW, stats.FAST, stats.UNKNOWN],
        points: 100,
        total: 900
      },
      details: [
        {
          title: 'Бонус за скорость',
          extra: {
            count: 1,
            result: stats.FAST
          },
          points: 50,
          total: 50
        },
        {
          title: 'Бонус за жизни',
          extra: {
            count: 2,
            result: 'heart'
          },
          points: 50,
          total: 100
        },
        {
          title: 'Штраф за медлительность',
          extra: {
            count: 2,
            result: stats.SLOW
          },
          points: 50,
          total: -100
        }
      ],
      final: 950
    },
    {
      mainStats: {
        passed: false,
        stats: [stats.CORRECT, stats.SLOW, stats.FAST, stats.CORRECT, stats.WRONG, stats.UNKNOWN, stats.SLOW, stats.SLOW, stats.FAST, stats.UNKNOWN],
        total: 'fail'
      }
    },
    {
      mainStats: {
        passed: true,
        stats: [stats.CORRECT, stats.SLOW, stats.FAST, stats.CORRECT, stats.WRONG, stats.UNKNOWN, stats.SLOW, stats.SLOW, stats.FAST, stats.UNKNOWN],
        points: 100,
        total: 900
      },
      details: [
        {
          title: 'Бонус за жизни',
          extra: {
            count: 2,
            result: 'heart'
          },
          points: 50,
          total: 100
        }
      ],
      final: 950
    }
  ]
};

const template =
  `<div>
    ${header()}
    <div class="result">
      <h1>${result.verdict}</h1>
      ${result.levels.map((level, index) => resultTable(index + 1, level)).join('')}
    </div>
  </div>`;

const templateElem = getElement(template);
export default templateElem;
