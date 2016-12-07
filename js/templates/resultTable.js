import gameStats from './gameStats';
import statsResult from './statsResult';

export default (number, {passed, mainStats, details}) => {
  const resultPoints = (points) => `<td class="result__points">${points ? `×&nbsp;${points}` : ''}</td>`;
  const resultTotal = (points, passed) => `<td class="result__total ${passed ? '' : 'result__total--final'}">${points}</td>`;
  const resultExtra = (result) => `<td class="result__extra">${result}</td>`;
  const resultNumber = (number) => `<td class="result__number">${number}</td>`;
  const resultDetails = (details) => {
    return details.map(({title, extra, points, total}) => {
      return `
          <tr>
            <td></td>
            ${resultExtra(`${title}:`)}
            ${resultExtra(extra.count + statsResult(extra.result))}
            ${resultPoints(points)}
            ${resultTotal(total, passed)}
          </tr>`;
    }).join('');
  };

  const detailsTemplate = details ? resultDetails(details) : '';

  const template =
    `<table class="result__table">
      <tbody>
        <tr>
          ${resultNumber(`${number}.`)}
          <td colspan="2">${gameStats(mainStats.stats)}</td>
          ${resultPoints(mainStats.points)}
          ${resultTotal(mainStats.total, passed)}
        </tr>
        ${detailsTemplate}
      </tbody>
    </table>`;

  return template;
};
