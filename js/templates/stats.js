import statsResult from './statsResult';

export default (stats) => {
  return `<ul class="stats">${stats.map((result) => statsResult(result)).join('')}</ul>`;
};
