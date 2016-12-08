export default (answers, index) => {
  return answers.map((answer) => {
    return `
      <label class="game__answer  game__answer--${answer.type}">
        <input name="question${index}" type="radio" value="${answer.type}">
        <span>${answer.type === 'photo' ? 'фото' : 'Рисунок'}</span>
      </label>
    `;
  }).join('');
};
