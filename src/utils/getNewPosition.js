const PLAYER_SPEED = 320/60;
const MAX_PLAYER_POSITION = 320;
const MIN_PLAYER_POSITION = 0;

const getNewPlayerPosition = (position, move) => {
    const newPosition = position + (move * PLAYER_SPEED);

    if (newPosition < MIN_PLAYER_POSITION) return MIN_PLAYER_POSITION;
    else if (newPosition > MAX_PLAYER_POSITION) return MAX_PLAYER_POSITION;

    return newPosition;
}

export {
    getNewPlayerPosition
}