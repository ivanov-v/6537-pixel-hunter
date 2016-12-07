import gameStats from './gameStats';
import statsResult from './statsResult';

export default (number, {mainStats, details}) => {
  const resultPoints = (points) => `<td class="result__points">×&nbsp;${points}</td>`;
  const resultTotal = (points) => `<td class="result__total">${points}</td>`;
  const resultExtra = (result) => `<td class="result__extra">${result}</td>`;
  const resultNumber = `<td class="result__number">${number}</td>`;

  const mainRowTemplate =
    `<tr>
      ${resultNumber}
      <td colspan="2">${gameStats(mainStats.stats)}</td>
      ${resultPoints(mainStats.points)}
      ${resultTotal(mainStats.total)}
    </tr>`;

  const detailsTemplate = details.map(({title, extra, points, total}) => {
    return `
      <tr>
        <td></td>
        ${resultExtra(`${title}:`)}
        ${resultExtra(extra.count + statsResult(extra.result))}
        ${resultPoints(points)}
        ${resultTotal(total)}
      </tr>`;
  }).join('');

  console.log(detailsTemplate);

  const content = mainRowTemplate + detailsTemplate;

  const template =
    `<table class="result__table">
      <tbody>
        ${content}
      </tbody>
    </table>`;

  return template;
};
