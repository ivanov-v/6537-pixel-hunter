import getElement from '../getElement';
import backButton from '../templates/backButton';
import statsResult from '../templates/statsResult';
import gameStats from '../templates/gameStats';

const results = {
  games: [
    {
      mainStats: {
        stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
        points: 100,
        total: 900
      },
      additionally: [
        {
          title: 'Бонус за скорость',
          extra: {
            count: 1,
            result: 'fast'
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
            result: 'slow'
          },
          points: 50,
          total: -100
        }
      ],
      total: 950
    },
    {
      mainStats: {
        stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
        points: null,
        total: 'fail'
      }
    },
    {
      mainStats: {
        stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
        points: 100,
        total: 900
      },
      additionally: [
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
      total: 950
    }
  ]
};

const template =
  `<div id="stats">
    <header class="header">
      ${backButton}
    </header>
    <div class="result">
      <h1>Победа!</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
              ${statsResult('wrong')}
              ${statsResult('slow')}
              ${statsResult('fast')}
              ${statsResult('correct')}
              ${statsResult('wrong')}
              ${statsResult('unknown')}
              ${statsResult('slow')}
              ${statsResult('unknown')}
              ${statsResult('fast')}
              ${statsResult('unknown')}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">50</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">-100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              ${statsResult('wrong')}
              ${statsResult('slow')}
              ${statsResult('fast')}
              ${statsResult('correct')}
              ${statsResult('wrong')}
              ${statsResult('unknown')}
              ${statsResult('slow')}
              ${statsResult('wrong')}
              ${statsResult('fast')}
              ${statsResult('wrong')}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              ${statsResult('wrong')}
              ${statsResult('slow')}
              ${statsResult('fast')}
              ${statsResult('correct')}
              ${statsResult('wrong')}
              ${statsResult('unknown')}
              ${statsResult('slow')}
              ${statsResult('unknown')}
              ${statsResult('fast')}
              ${statsResult('unknown')}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
    </div>
  </div>`;

const templateElem = getElement(template);
export default templateElem;
