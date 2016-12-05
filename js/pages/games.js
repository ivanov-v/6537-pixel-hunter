import getGame from '../getGame';
import {levels, levelsNames} from '../data/game-data';

const game1 = getGame(levels[levelsNames.GAME1]);

console.log(game1);
