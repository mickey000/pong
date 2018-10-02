import { CHECK_COLLISION, SET_BALL_MOVE, SET_WINNER } from 'constants/actions';
import { takeEvery, put, select } from 'redux-saga/effects';
import { checkBallCollision } from 'utils/checkCollision';

function * checkCollisionFunc () {
    const { ball, leftPlayer, rightPlayer } = yield select();

    const ballMoveX = ball.moveX;
    const ballMoveY = ball.moveY;
    const ballPosition = ball.position;
    const leftPlayerPosition = leftPlayer.position;
    const rightPlayerPosition = rightPlayer.position;
   
    const { winner, playerCollision, wallCollision } = checkBallCollision(ballPosition, leftPlayerPosition, rightPlayerPosition);

    if (winner) {
        yield put({ type: SET_WINNER, winner});
    } else if (playerCollision) {
        yield put({ type: SET_BALL_MOVE, moveX: ballMoveX * -1, moveY: ballMoveY });
    } else if (wallCollision) {
        yield put({ type: SET_BALL_MOVE, moveX: ballMoveX, moveY: ballMoveY * -1 });
    }
}

export default function * checkCollision() {
    yield takeEvery(CHECK_COLLISION, checkCollisionFunc);
}