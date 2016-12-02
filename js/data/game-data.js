export const stats = {
  WRONG: 'wrong',
  SLOW: 'slow',
  FAST: 'fast',
  CORRECT: 'correct',
  UNKNOWN: 'unknown'
};

export const levelsNames = {
  GAME1: 0,
  GAME2: 1,
  GAME3: 2
};

export const levels = [
  {
    type: 'answers-2',
    statusbar: {
      time: 'NN',
      lives: 3
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
        {
          image: 'http://placehold.it/468x458',
          answers: [
            {
              type: 'photo',
              correct: true
            },
            {
              type: 'paint',
              correct: false
            }
          ]
        },
        {
          image: 'http://placehold.it/468x458',
          answers: [
            {
              type: 'photo',
              correct: false
            },
            {
              type: 'paint',
              correct: true
            }
          ]
        }
      ]
    },
    stats: [stats.WRONG, stats.CORRECT, stats.FAST, stats.CORRECT, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN]
  },
  {
    type: 'answers-1',
    statusbar: {
      time: 'NN',
      lives: 2
    },
    question: {
      description: 'Угадайте, фото или рисунок?',
      options: [
        {
          image: 'http://placehold.it/705x455',
          answers: [
            {
              type: 'photo',
              correct: true
            },
            {
              type: 'paint',
              correct: false
            }
          ]
        }
      ]
    },
    stats: [stats.WRONG, stats.CORRECT, stats.FAST, stats.CORRECT, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN]
  },
  {
    type: 'answers-3',
    statusbar: {
      time: 'NN',
      lives: 1
    },
    question: {
      description: 'Найдите рисунок среди изображений',
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: true
        },
        {
          image: 'http://placehold.it/304x455',
          correct: false
        },
        {
          image: 'http://placehold.it/304x455',
          correct: false
        }
      ]
    },
    stats: [stats.WRONG, stats.CORRECT, stats.FAST, stats.CORRECT, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN, stats.UNKNOWN]
  }
];
