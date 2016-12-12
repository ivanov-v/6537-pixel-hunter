import {levels} from './game-data';

export const initialState = {
  level: 0,
  time: 30,
  lives: 3
};

export const MaxStateValues = {
  LEVELS: levels.length,
  LIVES: 3
};

export const setLevel = (state, level) => {
  if (level < 0 || level > MaxStateValues.LEVELS) {
    throw new RangeError(`Значение должно быть в диапазоне от 0 до ${MaxStateValues.LEVELS}!`);
  }

  return Object.assign({}, state, {level});
};

export const setTime = (state, time) => {
  if (time < 0) {
    throw new RangeError('Значение не может быть отрицательным!');
  }

  return Object.assign({}, state, {time});
};

export const setLives = (state, live) => {
  if (live < 0 || live > MaxStateValues.LIVES) {
    throw new RangeError(`Значение должно быть в диапазоне от 0 до ${MaxStateValues.LIVES}!`);
  }

  return Object.assign({}, state, {live});
};

export const hasLevel = (num) => typeof levels[num] !== 'undefined';

export const getLevel = (num) => {
  if (!hasLevel(num)) {
    throw new RangeError(`Игра не имеет уровень ${num}!`);
  }

  return levels[num];
};
