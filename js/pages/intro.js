import getElement from '../getElement';
import renderPage from '../renderPage';
import greeting from './greeting';

const template =
  `<div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>`;

const element = getElement(template);
const asterisk = element.querySelector('.intro__asterisk');
asterisk.addEventListener('click', () => renderPage(greeting));

export default element;
