import getElement from '../getElement';
import renderPage from '../renderPage';
import rules from './rules';

export default (data) => {
  const template =
    `<div class="greeting  central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>${data.title}</h3>
        <p>${data.description}</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`;

  const element = getElement(template);
  const continueButton = element.querySelector('.greeting__continue');
  continueButton.addEventListener('click', () => renderPage(rules));

  return element;
};
