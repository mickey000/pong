import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    getScore = number => number < 10 ? `0${number}` : number;

    render() {
        const { score } = this.props;

        return (
            <header className="header">
                <div className='section left'>
                    <div className='line player-name'>PLAYER 01</div>
                    <div className='line player-score'>SCORE: {this.getScore(score.leftPlayer)}</div>
                </div>
                <div className='section right'>
                    <div className='line player-name'>PLAYER 02</div>
                    <div className='line player-score'>SCORE: {this.getScore(score.rightPlayer)}</div>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({
        score: state.gameState.score
    }),
    undefined
)(Header);