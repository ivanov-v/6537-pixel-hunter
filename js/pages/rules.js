import getElement from '../getElement';
import renderPage from '../renderPage';
import header from '../templates/header';
import game from './game';

const template =
  `<div>
    ${header()}
    <div class="rules  central--none">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">
        Угадай 10 раз для каждого изображения фото
        <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.
        <br>
        Фотографиями или рисунками могут быть оба изображения.
        <br>
        На каждую попытку отводится 30 секунд.
        <br>
        Ошибиться можно не более 3 раз.
        <br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
  </div>`;

const element = getElement(template);
const form = element.querySelector('.rules__form');
const input = form.querySelector('.rules__input');
const goButton = form.querySelector('.rules__button.continue');

const inputHandler = (evt) => {
  if (evt.target.value) {
    goButton.disabled = false;
  } else {
    goButton.disabled = true;
  }
};

const formHandler = (evt) => {
  evt.preventDefault();
  renderPage(game());
};

form.addEventListener('submit', formHandler);
input.addEventListener('input', inputHandler);

export default element;
