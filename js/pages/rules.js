import getElement from '../getElement';
import renderPage from '../renderPage';
import header from '../templates/header';
import game1 from './game-1';

export default (data) => {
  const template =
    `<div>
      ${header()}
      <div class="rules  central--none">
        <h1 class="rules__title">${data.title}</h1>
        <p class="rules__description">${data.description}</p>
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
    renderPage(game1);
  };

  form.addEventListener('submit', formHandler);
  input.addEventListener('input', inputHandler);

  return element;
};
