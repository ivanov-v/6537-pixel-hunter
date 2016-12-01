import gameAnswers from '../templates/gameAnswers';

const settingsVariants = [
  {
    contentType: 'wide',
    imageSizes: {
      width: 705,
      height: 455
    }
  },
  {
    contentType: '',
    imageSizes: {
      width: 468,
      height: 458
    }
  },
  {
    contentType: 'triple',
    imageSizes: {
      width: 304,
      height: 455
    }
  }
];

const getSettings = (settings, optionsLength) => {
  // switch (optionsLength) {
  //   case 1:
  //     return settings[0];
  //   case 2:
  //     return settings[1];
  //   case 3:
  //     return settings[2];
  //   default:
  //     return settings[1];
  // }
};

export default (options) => {
  const selectedSetings = getSettings(settingsVariants, options.length);

  const {contentType, imageSizes: {width, height}} = selectedSetings;

  const optionsTemplate = options.map((option, index) => {
    return `
      <div class="game__option">
        <img src="${option.image}" alt="Option ${index + 1}" width="${width}" height="${height}">
        ${option.answers ? gameAnswers(option.answers) : ''}
      </div>
    `;
  });

  return `<form class="game__content ${contentType ? `game__content--${contentType}` : ''}">${optionsTemplate.join('')}</form>`;
};
