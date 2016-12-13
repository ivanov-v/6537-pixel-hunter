import {initialState, setLevel, setTime, getLevel} from './game';

class GameModel {
  constructor(state = initialState) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = initialState;
  }

  die() {
    this._state = setLevel(this._state, this._state.level - 1);
  }

  isDead() {
    return this._state.lives === 0;
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }

  nextLevel() {
    this._state = setLevel(this._state, this._state.level + 1);
  }

  tick() {
    this._state = setTime(this._state, this._state.time - 1);
  }
}

export default new GameModel();
