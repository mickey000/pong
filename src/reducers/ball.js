const initState = {
    position: {
        x: (790 - 10) / 2,
        y: (390 - 10) / 2
    },
    moveX: 0,
    moveY: 0
};

const ballReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SET_BALL_MOVE':
        const { moveX, moveY } = action.move;
        return {
            ...state,
            moveX,
            moveY
        };

    case 'SET_BALL_POSITION':
        const { position } = action;
        return {
            ...state,
            position
        };

      default:
        return state;
    }
  };
  
  export default ballReducer;