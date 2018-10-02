import { SET_RIGHT_MOVE, SET_RIGHT_POSITION, RESET_POSITIONS } from 'constants/actions';

const initState = {
    position: (360 - 40) / 2,
    moveY: 0
};

const rightPlayerReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_RIGHT_MOVE:
        const { moveY } = action;
        return {
            ...state,
            moveY
        };

    case SET_RIGHT_POSITION:
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
  
  export default rightPlayerReducer;