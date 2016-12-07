import gameStats from './gameStats';
import statsResult from './statsResult';


// const resultPoints = (points) => `<td class="result__points">${points ? `×&nbsp;${points}` : ''}</td>`;
// const resultTotal = (points, passed) => `<td class="result__total ${passed ? '' : 'result__total--final'}">${points}</td>`;
// const resultExtra = (result) => `<td class="result__extra">${result}</td>`;
// const resultNumber = (number) => `<td class="result__number">${number}</td>`;
// const resultDetails = (details) => {
//   return details.map(({title, extra, points, total}) => {
//     return `
//         <tr>
//           <td></td>
//           ${resultExtra(`${title}:`)}
//           ${resultExtra(extra.count + statsResult(extra.result))}
//           ${resultPoints(points)}
//           ${resultTotal(total, passed)}
//         </tr>`;
//   }).join('');
// };
//
// const detailsTemplate = details ? resultDetails(details) : '';


const mainRow = (number, {passed, stats, points, total}) => {
  const template =
    `<tr>
      <td class="result__number">${number}</td>
      <td colspan="2">
        ${gameStats(stats)}
      </td>
    </tr>`;

  return template;
};

export default (number, {mainStats, details, final}) => {
  const template =
    `<table class="result__table">
      <tbody>
        ${mainRow(number, mainStats)}
      </tbody>
    </table>`;

  return template;
};
