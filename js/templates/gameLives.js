import heart from './heart';
const MAX_LIVES = 3;

export default (lives = MAX_LIVES) => {
  let emptyLives = MAX_LIVES - lives;
  let gameLives = '';

  for (let i = 0; i < MAX_LIVES; i++) {
    if (emptyLives >= 1) {
      gameLives += `${heart('empty')} `;
    } else {
      gameLives += `${heart('full')} `;
    }

    emptyLives--;
  }

  return `<div class="game__lives">${gameLives}</div>`;
};
