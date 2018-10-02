import { SET_BALL_MOVE } from 'constants/actions';
import randomMove from 'utils/randomMove';

export default {
    setBallMove: (moveX, moveY) => {

        return {
            type: SET_BALL_MOVE,
            moveX: moveX || randomMove(),
            moveY: moveY || randomMove()
        }
    }
}