import heart from './heart';
const MAX_LIVES = 3;

export default (lives = MAX_LIVES) => {
  const gameLives = [];

  for (let i = MAX_LIVES; i > 0; i--) {
    const live = heart(i - lives > 0 ? 'empty' : 'full');
    gameLives.push(live);
  }

  return `<div class="game__lives">${gameLives.join(' ')}</div>`;
};
