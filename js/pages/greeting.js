import getElement from '../getElement';
import renderPage from '../renderPage';
import rules from './rules';

// const greeting = {
//   title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
//   description: `Правила игры просты.<br>
//     Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
//     Задача кажется тривиальной, но не думай, что все так просто.<br>
//     Фотореализм обманчив и коварен.<br>
//     Помни, главное — смотреть очень внимательно.`
// };
//
//
//
// const templateElem = getElement(template);
// export default templateElem;
//
// const continueButton = templateElem.querySelector('.greeting__continue');
//
// const continueHandler = (evt) => renderPage(rules);
//
// continueButton.addEventListener('click', continueHandler);


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
