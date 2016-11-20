import getElementFromTemplate from './getElementFromTemplate';
import intro from './pages/intro';
import greeting from './pages/greeting';
import rules from './pages/rules';
import game1 from './pages/game-1';
import game2 from './pages/game-2';
import game3 from './pages/game-3';
import stats from './pages/stats';

(() => {
  // Rules
  let rulesSubmit = rules.querySelector('.rules__button');

  rules.querySelector('.rules__input').oninput = (evt) => {
    if (evt.currentTarget.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer
  let mainElement = document.getElementById('main');
  let switcher = getElementFromTemplate(`
      <div>
        <span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>
        <span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>
      </div>
  `);
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    intro,
    greeting,
    rules,
    game1,
    game2,
    game3,
    stats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (evt) => {
    evt.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (evt) => {
    evt.preventDefault();

    select(current - 1);
  };

  select(0);
})();
