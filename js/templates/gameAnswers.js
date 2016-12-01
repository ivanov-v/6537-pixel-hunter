export default (answers) => {
  return answers.map((answer, index) => {
    return `
      <label class="game__answer  game__answer--${answer.type}">
        <input name="question${index + 1}" type="radio" value="${answer.type}">
        <span>${answer.type === 'photo' ? 'фото' : 'Рисунок'}</span>
      </label>
    `;
  }).join('');
};
