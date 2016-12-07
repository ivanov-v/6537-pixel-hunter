import {Stats} from './game-data';

export default {
  verdict: 'Победа!',
  levels: [
    {
      mainStats: {
        passed: true,
        stats: [Stats.CORRECT, Stats.SLOW, Stats.FAST, Stats.CORRECT, Stats.WRONG, Stats.UNKNOWN, Stats.SLOW, Stats.SLOW, Stats.FAST, Stats.UNKNOWN],
        points: 100,
        total: 900
      },
      details: [
        {
          title: 'Бонус за скорость',
          extra: {
            count: 1,
            result: Stats.FAST
          },
          points: 50,
          total: 50
        },
        {
          title: 'Бонус за жизни',
          extra: {
            count: 2,
            result: 'heart'
          },
          points: 50,
          total: 100
        },
        {
          title: 'Штраф за медлительность',
          extra: {
            count: 2,
            result: Stats.SLOW
          },
          points: 50,
          total: -100
        }
      ],
      final: 950
    },
    {
      mainStats: {
        passed: false,
        stats: [Stats.CORRECT, Stats.SLOW, Stats.FAST, Stats.CORRECT, Stats.WRONG, Stats.UNKNOWN, Stats.SLOW, Stats.SLOW, Stats.FAST, Stats.UNKNOWN],
        total: 'fail'
      }
    },
    {
      mainStats: {
        passed: true,
        stats: [Stats.CORRECT, Stats.SLOW, Stats.FAST, Stats.CORRECT, Stats.WRONG, Stats.UNKNOWN, Stats.SLOW, Stats.SLOW, Stats.FAST, Stats.UNKNOWN],
        points: 100,
        total: 900
      },
      details: [
        {
          title: 'Бонус за жизни',
          extra: {
            count: 2,
            result: 'heart'
          },
          points: 50,
          total: 100
        }
      ],
      final: 950
    }
  ]
};
