import { START_ROUND, SET_PAUSE, SET_WINNER } from 'constants/actions';

const initState = {
    round: false,
    pause: false,
    banner: true,
    bannerMessage: 'PRESS SPACE TO START GAME',
    score: {
        leftPlayer: 0,
        rightPlayer: 0
    }
};

const gameStateReducer = (state = initState, action) => {
    switch (action.type) {
      case START_ROUND:

        return {
            ...state,
            round: true,
            banner: false,
            bannerMessage: ''
        };

    case SET_PAUSE:
        if (!state.round) return state;

        return {
            ...state,
            pause: !state.pause,
            banner: !state.pause,
            bannerMessage: !state.pause ? 'PAUSE' : ''
        };

    case SET_WINNER:

        const { winner } = action;

        return {
            round: false,
            pause: false,
            banner: true,
            bannerMessage: `PLAYER ${winner === 'leftPlayer' ? '01' : '02'} WINS`,
            score: {
                ...state.score,
                [winner]: state.score[winner] + 1
            }
        };

        default:
            return state;
    }

};
  
  export default gameStateReducer;