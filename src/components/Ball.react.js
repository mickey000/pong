import React, { Component } from 'react';

class Ball extends Component {

    getPosition() {
        const { position: { x, y } } = this.props;

        return {
            left: x,
            bottom: y
        };
    }

    render() {
        const position = this.getPosition();

        return (
            <div className="ball" style={position}/>
        );
    }
}

export default Ball;
