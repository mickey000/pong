import React, { Component } from 'react';
import Stick from 'components/Stick.react';
import Ball from 'components/Ball.react';

class Playground extends Component {

    getLeftStickPosition() {
        // min y = 40; max = 360;
        const y = (360 - 40) / 2;

        return y;
    }

    getRightStickPosition() {
        // min y = 40; max = 360;
        const y = (360 - 40) / 2;

        return y;
    }

    getBallPosition() {
        // min x = 10; max x = 790;
        // min y = 10; max x = 390;
        const x = (790 - 10) / 2;
        const y = (390 - 10) / 2;

        return {
            x: x,
            y: y
        };
    }

    render() {
        const leftPosition = this.getLeftStickPosition();
        const rightPosition = this.getRightStickPosition();
        const ballPosition = this.getBallPosition();

        return (
            <div className='playground'>
                <Stick side='left' position={leftPosition} />
                <Stick side='right' position={rightPosition} />
                <Ball position={ballPosition} />
            </div>
        );
    }
}

export default Playground;
