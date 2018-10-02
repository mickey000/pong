import { START_ROUND, UPDATE_POSITIONS, RESET_POSITIONS, SET_PAUSE } from 'constants/actions';

export default {
    startRound: () => ({ type: START_ROUND }),
    setPause: () => ({ type: SET_PAUSE }),
    updatePositions: () => ({ type: UPDATE_POSITIONS }),
    resetPositions: () => ({ type: RESET_POSITIONS })
}