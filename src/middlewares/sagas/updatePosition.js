import { UPDATE_POSITIONS, SET_BALL_POSITION, SET_LEFT_POSITION, SET_RIGHT_POSITION, CHECK_COLLISION } from 'constants/actions';
import { takeEvery, all, put, select } from 'redux-saga/effects';
import { getNewBallPosition, getNewPlayerPosition } from 'utils/getNewPosition';

function * updatePositionsFunc () {
    const { gameState, ball, leftPlayer, rightPlayer } = yield select();

    if (!gameState.round || gameState.pause) return;

    const ballPosition = ball.position;
    const ballMoveX = ball.moveX;
    const ballMoveY = ball.moveY;

    const leftPlayerPosition = leftPlayer.position;
    const leftPlayerMove = leftPlayer.moveY;

    const rightPlayerPosition = rightPlayer.position;
    const rightPlayerMove = rightPlayer.moveY;

    const newBallPosition = getNewBallPosition(ballPosition, ballMoveX, ballMoveY);
    const newLeftPlayerPosition = getNewPlayerPosition(leftPlayerPosition, leftPlayerMove);
    const newRightPlayerPosition = getNewPlayerPosition(rightPlayerPosition, rightPlayerMove);

    yield all([
        put({ type: SET_BALL_POSITION, position: newBallPosition }),
        put({ type: SET_LEFT_POSITION, position: newLeftPlayerPosition }),
        put({ type: SET_RIGHT_POSITION, position: newRightPlayerPosition })
    ]);

    yield put({ type: CHECK_COLLISION });
}

export default function* updatePositions() {
    yield takeEvery(UPDATE_POSITIONS, updatePositionsFunc);
}