const BALL = 20;
const PLAYER = 80;

const MIN_BALL_X_POSITION = 20;
const MAX_BALL_X_POSITION = 760;
const MIN_BALL_Y_POSITION = 0;
const MAX_BALL_Y_POSITION = 380;

const LEFT_PLAYER_LOOSE = 0;
const RIGHT_PLAYER_LOOSE = 780;

const collision = (ball, player) => {
    if ((ball + BALL) <= player) return false; // below
    if (ball >= (player + PLAYER)) return false; // above

    return true;
}

const checkBallCollision = (ballPosition, lpY, rpY) => {
    const { x: ballX, y: ballY } = ballPosition;

    if (ballX <= MIN_BALL_X_POSITION) {
        const playerCollision = collision(ballY, lpY);

        if (playerCollision) {
            return { playerCollision };
        }
        
        if (ballX <= LEFT_PLAYER_LOOSE) {
            return { winner: 'rightPlayer' };
        }
    }

    if (ballX >= MAX_BALL_X_POSITION) {
        const playerCollision = collision(ballY, rpY);

        if (playerCollision) {
            return { playerCollision };
        }
        
        if (ballX >= RIGHT_PLAYER_LOOSE) {
            return { winner: 'leftPlayer' };
        }
    }

    if (ballY <= MIN_BALL_Y_POSITION || ballY >= MAX_BALL_Y_POSITION) {
        return { wallCollision: true };
    }

    return {};
}

export {
    checkBallCollision
}