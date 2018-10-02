import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import playgroundActions from 'actions/playground';
import ballActions from 'actions/ball';
import leftPlayerActions from 'actions/leftPlayer';
import rightPlayerActions from 'actions/rightPlayer';
import Stick from 'components/Stick.react';
import Ball from 'components/Ball.react';
import Banner from 'components/Banner.react';
import key from 'constants/keysMap';
import directions from 'constants/directions';

class Playground extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
        window.addEventListener('keyup', this.handleKeyUp)

        this.updatePositions();
    }
     
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
        window.removeEventListener('keyup', this.handleKeyUp)
    }

    componentDidUpdate() {
        this.updatePositions();        
    }

    updatePositions = () => {
        const { shouldUpdatePositions } = this.props;

        if (!shouldUpdatePositions && this.updatePositionsInterval) {
            clearInterval(this.updatePositionsInterval);
            delete this.updatePositionsInterval;

            return;
        }
            
        if (shouldUpdatePositions && !this.updatePositionsInterval)
            this.updatePositionsInterval = setInterval(this.props.updatePositions, 1000/60);

    }

    handleKeyDown = (e) => {
        switch(e.keyCode) {
            case key.W:
                e.preventDefault();
                this.props.setLeftMove(directions.UP);
                return;
            case key.S:
                e.preventDefault();
                this.props.setLeftMove(directions.DOWN);
                return;
            case key.UP:
                e.preventDefault();
                this.props.setRightMove(directions.UP);
                return;
            case key.DOWN:
                e.preventDefault();
                this.props.setRightMove(directions.DOWN);
                return;
            case key.SPACE:
                e.preventDefault();
                if (!this.props.round) {
                    this.props.resetPositions();
                    this.props.startRound();
                    this.props.setBallMove();

                    return;
                }

                if (this.props.round) {
                    this.props.setPause();

                    return;
                }
                
                return;
            default:
                return;
        }
    }

    handleKeyUp = (e) => {
        switch(e.keyCode) {
            case key.W:
            case key.S:
                e.preventDefault();
                this.props.setLeftMove(directions.ZERO);
                return;
            case key.UP:
            case key.DOWN:
                e.preventDefault();
                this.props.setRightMove(directions.ZERO);
                return;
            default:
                return;
        }
    }

    render() {
        const { leftPosition, rightPosition, ballPosition, banner, bannerMessage } = this.props;

        return (
            <div className='playground'>
                <Stick side='left' position={leftPosition} />
                <Stick side='right' position={rightPosition} />
                <Ball position={ballPosition} />
                {banner && <Banner message={bannerMessage}/>}
            </div>
        );
    }
}

export default connect(
    state => {
        const { gameState, leftPlayer, rightPlayer, ball } = state;

        return {
            leftPosition: leftPlayer.position,
            rightPosition: rightPlayer.position,
            ballPosition: ball.position,
            shouldUpdatePositions:
                (gameState.round && !gameState.pause) &&
                (leftPlayer.moveY || rightPlayer.moveY || ball.moveX || ball.moveY),
            banner: gameState.banner,
            bannerMessage: gameState.bannerMessage,
            pause: gameState.pause,
            round: gameState.round
        };
    },
    dispatch => bindActionCreators({
        ...playgroundActions,
        ...ballActions,
        ...leftPlayerActions,
        ...rightPlayerActions
    }, dispatch)
)(Playground);
