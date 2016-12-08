export const Stats = {
  WRONG: 'wrong',
  SLOW: 'slow',
  FAST: 'fast',
  CORRECT: 'correct',
  UNKNOWN: 'unknown',
  HEART: 'heart'
};

export const LevelType = {
  ANSWERS_1: 'answers-1',
  ANSWERS_2: 'answers-2',
  ANSWERS_3: 'answers-3'
};

export const levels = [
  {
    type: LevelType.ANSWERS_2,
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_1,
    statusbar: {
      time: 'NN',
      lives: 3
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_3,
    statusbar: {
      time: 'NN',
      lives: 3
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_3,
    statusbar: {
      time: 'NN',
      lives: 2
    },
    question: {
      description: 'Найдите рисунок среди изображений',
      options: [
        {
          image: 'http://placehold.it/304x455',
          correct: false
        },
        {
          image: 'http://placehold.it/304x455',
          correct: true
        },
        {
          image: 'http://placehold.it/304x455',
          correct: false
        }
      ]
    },
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 2
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 2
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 1
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 1
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 1
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  },
  {
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 1
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
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
    stats: [Stats.WRONG, Stats.CORRECT, Stats.FAST, Stats.CORRECT, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN, Stats.UNKNOWN]
  }
];
