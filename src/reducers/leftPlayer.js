import { SET_LEFT_MOVE, SET_LEFT_POSITION, RESET_POSITIONS } from 'constants/actions';

const initState = {
    position: (360 - 40) / 2,
    moveY: 0
};

const leftPlayerReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_LEFT_MOVE:
        const { moveY } = action;
        return {
            ...state,
            moveY
        };

    case SET_LEFT_POSITION:
        const { position } = action;
        return {
            ...state,
            position
        };

    case RESET_POSITIONS:
        return initState;

      default:
        return state;
    }
  };
  
  export default leftPlayerReducer;