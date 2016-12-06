import gameStats from './gameStats';

export default (number, {mainStats}) => {
  const resultPoints = (points) => `<td class="result__points">×&nbsp;${points}</td>`;
  const resultTotal = (points) => `<td class="result__total">${points}</td>`;
  const resultNumber = `<td class="result__number">${number}</td>`;

  const mainRow =
    `<tr>
      ${resultNumber}
      <td colspan="2">${gameStats(mainStats.stats)}</td>
      ${resultPoints(mainStats.points)}
      ${resultTotal(mainStats.total)}
    </tr>`;

  const content = mainRow;

  const template =
    `<table class="result__table">
      <tbody>
        ${content}
      </tbody>
    </table>`;

  return template;
};
