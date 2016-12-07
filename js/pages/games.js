import game from './game';
import renderPage from '../renderPage';
import {levels, levelsNames} from '../data/game-data';

renderPage(game(levels[levelsNames.GAME1]));
