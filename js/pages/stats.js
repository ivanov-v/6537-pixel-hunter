import getElement from '../getElement';
import header from '../templates/header';
import resultTable from '../templates/resultTable';

export default (data) => {
  const template =
    `<div>
      ${header()}
      <div class="result">
        <h1>${data.verdict}</h1>
        ${data.levels.map((level, index) => resultTable(index + 1, level)).join('')}
      </div>
    </div>`;

  return getElement(template);
};
