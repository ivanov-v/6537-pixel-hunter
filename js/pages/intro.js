import getElement from '../getElement';
import renderPage from '../renderPage';
import greeting from './greeting';

export default (data) => {
  const template =
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${data.motto}</p>
    </div>`;

  const element = getElement(template);
  const asterisk = element.querySelector('.intro__asterisk');
  asterisk.addEventListener('click', () => renderPage(greeting));

  return element;
};
