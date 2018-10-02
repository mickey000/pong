import React, { Component } from 'react';

class Stick extends Component {

    getPosition() {
        const { side, position } = this.props;

        return {
            [side]: 0,
            bottom: position
        };
    }

    render() {
        const position = this.getPosition();

        return (
            <div className="stick" style={position}/>
        );
    }
}

export default Stick;
