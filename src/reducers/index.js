import { combineReducers } from 'redux';
import gameState from './gameState';
import ball from './ball';
import leftPlayer from './leftPlayer';
import rightPlayer from './rightPlayer';

const pongGame = combineReducers({
    gameState,
    ball,
    leftPlayer,
    rightPlayer,
});

export default pongGame;