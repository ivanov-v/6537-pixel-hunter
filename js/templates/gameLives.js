import heart from './heart';
const MAX_LIVES = 3;

export default (lives = MAX_LIVES) => {
  const emptyLives = MAX_LIVES - lives;
  let gameLives = '';

  for (let i = 0; i < emptyLives; i++) {
    gameLives += `${heart('empty')} `;
  }

  for (let i = 0; i < lives; i++) {
    gameLives += `${heart('full')} `;
  }

  return `<div class="game__lives">${gameLives}</div>`;
};
