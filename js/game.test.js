import assert from 'assert';
import {initialState, setLevel, setTime, setLives} from './game';

describe('Параметры игры', function () {
  describe('Уровень', function () {
    describe('Изменение уровня', function () {
      it('Возвращает новый объект с переданным уровнем', function () {
        assert.equal(setLevel(initialState, 2).level, 2);
      });
    });

    describe('Ошибки при изменении уровня', function () {
      it('Выбрасывает ошибку, когда передается отрицательное значение', function () {
        assert.throws(() => setLevel(initialState, -1));
      });

      it('Выбрасывает ошибку, когда передается значение больше допустимого', function () {
        assert.throws(() => setLevel(initialState, 11));
      });
    });
  });


  describe('Время', function () {
    describe('Изменение времени', function () {
      it('Возвращает новый объект с переданным временем', function () {
        assert.equal(setTime(initialState, 23).time, 23);
      });
    });

    describe('Ошибки при изменении времени', function () {
      it('Выбрасывает ошибку, когда передается отрицательное значение', function () {
        assert.throws(() => setTime(initialState, -43));
      });
    });
  });


  describe('Жизни', function () {
    describe('Изменение жизней', function () {
      it('Возвращает новый объект с переданными жизнями', function () {
        assert.equal(setLives(initialState, 3).lives, 3);
      });
    });

    describe('Ошибки при изменении жизней', function () {
      it('Выбрасывает ошибку, когда передается отрицательное значение', function () {
        assert.throws(() => setLives(initialState, -1));
      });
    });
  });
});
