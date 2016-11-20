import getElementFromTemplate from '../getElementFromTemplate';
import greeting from './greeting';
import renderPage from '../renderPage';

const template =
  `<div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.
    </p>
  </div>`;

const templateElem = getElementFromTemplate(template);
export default templateElem;

const asteriskHandler = (evt) => {
  if (evt.target.className === 'intro__asterisk') {
    renderPage(greeting);
  }
};

document.addEventListener('click', asteriskHandler);
