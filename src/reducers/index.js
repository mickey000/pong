import { combineReducers } from 'redux';
import ball from './ball';
import leftPlayer from './leftPlayer';
import rightPlayer from 'reducers/rightPlayer';

const pongGame = combineReducers({
    ball,
    leftPlayer,
    rightPlayer,
});

export default pongGame;