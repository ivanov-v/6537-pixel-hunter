export const initialState = {
  level: 0,
  time: 30,
  lives: 3
};

export const MaxStateValues = {
  LEVEL: 10,
  LIVES: 3
};

export const setLevel = (state, level) => {
  if (level < 0 || level > MaxStateValues.LEVEL) {
    throw new Error(`Значение должно быть в диапазоне от 0 до ${MaxStateValues.LEVEL}!`);
  }

  return Object.assign({}, state, {level});
};

export const setTime = (state, time) => {
  if (time < 0) {
    throw new Error('Значение не может быть отрицательным!');
  }

  return Object.assign({}, state, {time});
};

export const setLives = (state, live) => {
  if (live < 0 || live > MaxStateValues.LIVES) {
    throw new Error(`Значение должно быть в диапазоне от 0 до ${MaxStateValues.LIVES}!`);
  }

  return Object.assign({}, state, {live});
};
