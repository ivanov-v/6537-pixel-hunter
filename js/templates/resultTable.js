import gameStats from './gameStats';

const resultExtra = (result) => `<td class="result__extra">${result}</td>`;

const statsResult = (state = 'unknown') => `<span class="stats__result stats__result--${state}"></span>`;

const resultPoints = (points) => `<td class="result__points">${points ? `×&nbsp;${points}` : ''}</td>`;

const resultTotal = (points, passed = true) => `<td class="result__total ${passed ? '' : 'result__total--final'}">${points ? points : ''}</td>`;

const mainRow = (number, {passed, stats, points, total}) => {
  const template =
    `<tr>
      <td class="result__number">${number}.</td>
      <td colspan="2">
        ${gameStats(stats)}
      </td>
      ${passed ? resultPoints(points) : resultTotal()}
      ${passed ? resultTotal(total) : resultTotal(total, passed)}
    </tr>`;

  return template;
};

const resultDetails = (details) => {
  const template = details.map(({title, extra, points, total}) => {
    return `
        <tr>
          <td></td>
          ${resultExtra(`${title}:`)}
          ${resultExtra(extra.count + '&nbsp;' + statsResult(extra.result))}
          ${resultPoints(points)}
          ${resultTotal(total)}
        </tr>`;
  }).join('');

  return template;
};

const finalRow = (final) => `<tr><td colspan="5" class="result__total  result__total--final">${final}</td></tr>`;

export default (number, {mainStats, details, final}) => {
  const template =
    `<table class="result__table">
      <tbody>
        ${mainRow(number, mainStats)}
        ${details ? resultDetails(details) : ''}
        ${final ? finalRow(final) : ''}
      </tbody>
    </table>`;

  return template;
};
