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
          image: '/img/answer11.jpg',
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
          image: '/img/answer12.jpg',
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
    type: LevelType.ANSWERS_1,
    statusbar: {
      time: 'NN',
      lives: 3
    },
    question: {
      description: 'Угадайте, фото или рисунок?',
      options: [
        {
          image: '/img/answer21.jpg',
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
    type: LevelType.ANSWERS_3,
    statusbar: {
      time: 'NN',
      lives: 3
    },
    question: {
      description: 'Найдите рисунок среди изображений',
      options: [
        {
          image: '/img/answer31.jpg',
          correct: true
        },
        {
          image: '/img/answer32.jpg',
          correct: false
        },
        {
          image: '/img/answer33.jpg',
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
          image: '/img/answer41.jpg',
          correct: false
        },
        {
          image: '/img/answer42.jpg',
          correct: true
        },
        {
          image: '/img/answer43.jpg',
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
          image: '/img/answer51.jpg',
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
          image: '/img/answer52.jpg',
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
    type: LevelType.ANSWERS_1,
    statusbar: {
      time: 'NN',
      lives: 3
    },
    question: {
      description: 'Угадайте, фото или рисунок?',
      options: [
        {
          image: '/img/answer61.jpg',
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
          image: '/img/answer71.jpg',
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
          image: '/img/answer81.jpg',
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
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 2
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
        {
          image: '/img/answer91.jpg',
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
          image: '/img/answer92.jpg',
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
    type: LevelType.ANSWERS_2,
    statusbar: {
      time: 'NN',
      lives: 2
    },
    question: {
      description: 'Угадайте для каждого изображения фото или рисунок?',
      options: [
        {
          image: '/img/answer101.jpg',
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
          image: '/img/answer102.jpg',
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
];
