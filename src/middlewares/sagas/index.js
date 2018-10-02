import { UPDATE_POSITIONS, SET_LEFT_POSITION, SET_RIGHT_POSITION } from 'constants/actions';
import { takeEvery, all, put, select } from 'redux-saga/effects';
import { getNewPlayerPosition } from 'utils/getNewPosition';

function * updatePositionsFunc () {
    const { gamePaused, leftPlayer, rightPlayer } = yield select();

    if (gamePaused) return;

    const leftPlayerPosition = leftPlayer.position;
    const leftPlayerMove = leftPlayer.moveY;

    const rightPlayerPosition = rightPlayer.position;
    const rightPlayerMove = rightPlayer.moveY;

    const newLeftPlayerPosition = getNewPlayerPosition(leftPlayerPosition, leftPlayerMove);
    const newRightPlayerPosition = getNewPlayerPosition(rightPlayerPosition, rightPlayerMove);

    yield all([
        put({ type: SET_LEFT_POSITION, position: newLeftPlayerPosition }),
        put({ type: SET_RIGHT_POSITION, position: newRightPlayerPosition })
    ]);
}

export default function* updatePositions() {
    yield takeEvery(UPDATE_POSITIONS, updatePositionsFunc);
}