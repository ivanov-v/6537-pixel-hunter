import gameAnswers from '../templates/gameAnswers';

const settingsVariants = {
  'answers-1': {
    contentMod: 'wide',
    imageSizes: {
      width: 705,
      height: 455
    }
  },
  'answers-2': {
    contentMod: '',
    imageSizes: {
      width: 468,
      height: 458
    }
  },
  'answers-3': {
    contentMod: 'triple',
    imageSizes: {
      width: 304,
      height: 455
    }
  }
};

const getSettings = (settings, gameType) => {
  return JSON.parse(JSON.stringify(settings))[gameType];
};

window.getSettings = getSettings;

export default (game) => {
  const selectedSetings = getSettings(settingsVariants, game.type);

  const {contentMod, imageSizes: {width, height}} = selectedSetings;

  const optionsTemplate = game.question.options.map((option, index) => {
    return `
      <div class="game__option">
        <img src="${option.image}" alt="Option ${index + 1}" width="${width}" height="${height}">
        ${option.answers ? gameAnswers(option.answers) : ''}
      </div>
    `;
  }).join('');

  return `<form class="game__content ${contentMod ? `game__content--${contentMod}` : ''}">${optionsTemplate}</form>`;
};
