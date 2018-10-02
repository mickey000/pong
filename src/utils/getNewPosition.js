const PLAYER_SPEED = 320/60;
const BALL_SPEED = PLAYER_SPEED * 1;

const MIN_PLAYER_POSITION = 0;
const MAX_PLAYER_POSITION = 320;

const getNewPlayerPosition = (position, move) => {
    const newPosition = position + (move * PLAYER_SPEED);

    if (newPosition < MIN_PLAYER_POSITION) return MIN_PLAYER_POSITION;
    else if (newPosition > MAX_PLAYER_POSITION) return MAX_PLAYER_POSITION;

    return newPosition;
}

const getNewBallPosition = (position, moveX, moveY) => {
    return {
        x: position.x + (moveX * BALL_SPEED),
        y: position.y + (moveY * BALL_SPEED),
    };
}

export {
    getNewPlayerPosition,
    getNewBallPosition
}