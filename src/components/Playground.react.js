import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import playgroundActions from 'actions/playground';
import leftPlayerActions from 'actions/leftPlayer';
import rightPlayerActions from 'actions/rightPlayer';
import Stick from 'components/Stick.react';
import Ball from 'components/Ball.react';
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
        const { leftPosition, rightPosition, ballPosition } = this.props;

        return (
            <div className='playground'>
                <Stick side='left' position={leftPosition} />
                <Stick side='right' position={rightPosition} />
                <Ball position={ballPosition} />
            </div>
        );
    }
}

export default connect(
    state => {
        const { leftPlayer, rightPlayer, ball } = state;

        return {
            leftPosition: leftPlayer.position,
            rightPosition: rightPlayer.position,
            ballPosition: ball.position,
            shouldUpdatePositions: leftPlayer.moveY || rightPlayer.moveY || ball.moveX || ball.moveY
        };
    },
    dispatch => bindActionCreators({
        ...playgroundActions,
        ...leftPlayerActions,
        ...rightPlayerActions
    }, dispatch)
)(Playground);
